
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
import { GenericUserService } from 'src/app/core/services/generic-user.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-commercialbank-dashboard',
  templateUrl: './commercialbank-dashboard.component.html',
  styleUrls: ['./commercialbank-dashboard.component.scss']
})
export class CommercialbankDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  breadCrumbItems: Array<{}>;
  myRouterLink: MyRouterLink = new MyRouterLink();
  moneyRegulation : RegulatorMoney = new RegulatorMoney;
  txLocalRegulation: RegulatorTxLocal = new RegulatorTxLocal;
  txAbroadRegulation: RegulatorTxTransfrontalier = new RegulatorTxTransfrontalier;
  deviseRegulation: Array<RegulatorDevise> = [] ;
  localCountry: Array<{}> = [] ;
  abroadCountry: Array<{}> = [] ;
  nbLocalUser = 0;
  nbAbroadUser = 0;
  nbUsers = 0;
  nbMerchants = 0;
  numberChart = [];
  formData: FormGroup;
  pays;
  paysBanqueCentral;
  test = false;


  constructor(public formBuilder: FormBuilder, private configService: ConfigService,
              private centralbankService: CentralBankService,
              private route: ActivatedRoute, private authService:AuthenticationService,
              private userService: GenericUserService ) {

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
  }


  private _fetchData() {
        this.userService.getAll(this.myRouterLink.linkGetAllUsers).subscribe(
      res => {
        this.nbUsers = res.length;
         if (res != null) {
           for(let i=0; i<res.length ; i++){
            if(res[i].endUserData.pays == this.pays){
              this.localCountry.unshift(res[i].endUserData);
              this.nbLocalUser = this.nbLocalUser+1;
            }else{
              this.abroadCountry.unshift(res[i].endUserData);
              this.nbAbroadUser = this.nbAbroadUser+1;
            }

        }
        }

        this.chartOptions = {
          series: [this.nbLocalUser,this.nbAbroadUser],
          chart: {
            width: "100%",
            type: "pie"
          },
          labels: [
            "Local",
            "Etranger"
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
    this.userService.getLastRegulation(this.myRouterLink.linkGetLastMoneyRegulationBSR,this.pays).subscribe(
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
    this.userService.getLastRegulation(this.myRouterLink.linkGetLastLocalTxRegulationBSR,this.pays).subscribe(
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
    this.userService.getLastRegulation(this.myRouterLink.linkGetLastInterpaysTxRegulationBSR,this.pays ).subscribe(
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
    this.userService.getLastRegulation(this.myRouterLink.linkGetLastDeviseRegulationBSR,this.pays).subscribe(
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


