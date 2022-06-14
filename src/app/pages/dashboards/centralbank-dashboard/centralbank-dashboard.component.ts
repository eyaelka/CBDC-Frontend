import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { MyRouterLink } from 'src/app/core/models/router-links';
import { RegulatorMoney } from 'src/app/core/models/regulator-money.model';
import { RegulatorTxLocal } from 'src/app/core/models/regulator-localtx.model';
import { RegulatorTxTransfrontalier } from 'src/app/core/models/regulator-abroadtx.model';
import { RegulatorDevise } from 'src/app/core/models/regulator-devise.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ChartComponent

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-centralbank-dashboard',
  templateUrl: './centralbank-dashboard.component.html',
  styleUrls: ['./centralbank-dashboard.component.scss']
})
export class CentralbankDashboardComponent implements OnInit {

  @ViewChild('scrollRef') scrollRef;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  breadCrumbItems: Array<{}>;
  myRouterLink: MyRouterLink = new MyRouterLink();
  moneyRegulation : RegulatorMoney = new RegulatorMoney;
  txLocalRegulation: RegulatorTxLocal = new RegulatorTxLocal;
  txAbroadRegulation: RegulatorTxTransfrontalier = new RegulatorTxTransfrontalier;
  deviseRegulation: Array<RegulatorDevise> = [] ;


  sassEarning: Array<Object>;
  sassTopSelling: Array<Object>;
  localCountry: Array<{}> = [] ;
  abroadCountry: Array<{}> = [] ;
  nbLocal = 0;
  nbAbroad = 0;
  numberChart = [];


  formData: FormGroup;
  pays;
  paysBanqueCentral;

  // Form submit
  chatSubmit: boolean;
  test = false;


  constructor(public formBuilder: FormBuilder, private configService: ConfigService,
              private centralbankService: CentralBankService,
              private route: ActivatedRoute, private authService:AuthenticationService ) {

              }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  ngOnInit(): void {

    this.authService.decodeUserAccesToken();

    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Saas', active: true }];

    this._fetchData();

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this.configService.getConfig().subscribe(response => {
      this.sassEarning = response.sassEarning;
      this.sassTopSelling = response.sassTopSelling;

    });
  }


  private _fetchData() {
        this.centralbankService.getAllCommercialBanks(this.myRouterLink.linkGetAllCommercialBanks).subscribe(
      res => {
        if (res != null) {
          console.log(res[0].commercialBankData.pays == this.pays)

        for(let i=0; i<res.length ; i++){
            if(res[i].commercialBankData.pays == this.pays){
              this.localCountry.unshift(res[i].commercialBankData);
              this.nbLocal = this.nbLocal+1;
            }else{
              this.abroadCountry.unshift(res[i].commercialBankData);
              this.nbAbroad = this.nbAbroad+1;
            }
            this.numberChart.push(this.nbLocal);
            this.numberChart.push(this.nbAbroad);

        }
        console.log("nblocal",this.nbLocal),
        console.log("nbetrangere",this.nbAbroad)
        }

        this.chartOptions = {
          series: [this.nbLocal,this.nbAbroad],
          chart: {
            width: "100%",
            type: "pie"
          },
          labels: [
            "Locale",
            "Etrangère"
          ],
          theme: {
            monochrome: {
              enabled: true
            }
          },
          title: {
            text: ""
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
        this.test = true;




      })


    /////////////////////////
    //Money Regulation
    ////////////////////////
    this.pays = this.authService.pays;
    this.centralbankService.getLastRegulation(this.myRouterLink.linkGetLastMoneyRegulation,this.pays).subscribe(
      res =>{
        if (res != null) {
          this.moneyRegulation = res;
        }else{
          console.log ("wait");
        }

      }
    )
    ///////////////////////
    //Local Tx Regulation
    ///////////////////////////
    this.centralbankService.getLastRegulation(this.myRouterLink.linkGetLastLocalTxRegulation,this.pays).subscribe(
      res =>{
        if (res != null) {
          this.txLocalRegulation = res;
        }else{
          console.log ("wait");
        }

      }
    )
    ///////////////////////
    //Tx Regulation Interpays
    ///////////////////////////
    this.paysBanqueCentral = this.pays
    this.centralbankService.getLastRegulation(this.myRouterLink.linkGetLastInterpaysTxRegulation,this.paysBanqueCentral ).subscribe(
      res =>{
        if (res != null) {
          this.txAbroadRegulation = res;
        }else{
          console.log ("wait");
        }

      }
    )
    ///////////////////////
    //Devise Regulation
    ///////////////////////////
    this.centralbankService.getLastRegulation(this.myRouterLink.linkGetLastDeviseRegulation,this.pays).subscribe(
      res =>{
        if (res != null) {
          this.deviseRegulation = res;
          console.log(this.deviseRegulation)

        }else{
          console.log ("wait");
        }
      })

  }







  }

