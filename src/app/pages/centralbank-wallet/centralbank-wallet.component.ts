import { Component, OnInit,ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TransactionInterbancaire } from 'src/app/core/models/transaction-interbanks.model';


//import { CentralbankWalletService } from './centralbank-wallet.service';
//import {  CentralBankWalletSortableService, SortEvent } from './centralbank-wallet-sortable.directive';

//import { ChartType, Activities } from './centralbank-wallet.model';

//import { OveviewChart, activitiesData } from './data';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { MyRouterLink } from 'src/app/core/models/router-links';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";


import { NgxSpinnerService } from "ngx-spinner";
import { ContactsModule } from '../contacts/contacts.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};


@Component({
  selector: 'app-centralbank-wallet',
  templateUrl: './centralbank-wallet.component.html',
  styleUrls: ['./centralbank-wallet.component.scss']
})
export class CentralbankWalletComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  transactions: TransactionInterbancaire[];

  myRouterLink: MyRouterLink = new MyRouterLink();
  balance;
  accountId;
  pays;
  formData: FormGroup;
  sendForm: FormGroup;
  submitted = false;
  transfrontalier = false;
  moneySent: number[] = [] ;
  dateSent: number[] = [] ;
  totalSentBalance;
  totalRecieveBalance;

  test = false;



    transactions$: Observable<TransactionInterbancaire[]>;
    total$: Observable<number>;


  constructor(private centralBankService: CentralBankService,
              private alertService: AlertService, private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private authService:AuthenticationService,
              private spinner: NgxSpinnerService
              ) {

  }
  ngOnInit(): void {
    this.authService.decodeUserAccesToken();
    this.accountId = this.authService.accountId,
    this.pays = this.authService.pays
    this.sendForm = this.formBuilder.group({
      accountSender: ['', [Validators.required]],
      defaultAmount: ['', [Validators.required]],
      currentAmount: ['', [Validators.required]],
      amountToTransfert: ['', [Validators.required]],
      accountReceiver: ['', [Validators.required]],
      motifTransaction: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      appFees: ['', [Validators.required]],
      centralBankFees: ['', [Validators.required]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required]],
      nameDevise: ['', [Validators.required]]

    })

    this.formData = this.formBuilder.group({
      accountSender: ['', [Validators.required]],
      defaultAmount: ['', [Validators.required]],
      currentAmount: ['', [Validators.required]],
      amountToTransfert: ['', [Validators.required]],
      accountReceiver: ['', [Validators.required]],
      motifTransaction: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      appFees: ['', [Validators.required]],
      centralBankFees: ['', [Validators.required]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


    this.centralBankService.getSentRecieve(this.myRouterLink.linkSentRecieveBalance, this.accountId).subscribe(
      res =>{
        if (res != null){
          console.log(res)
          this.totalSentBalance = res[0];
          this.totalRecieveBalance = res[1];
        }
      }
    )
    this.centralBankService.getAllMoneySentBySender(this.myRouterLink.linkGetAllMoneySentBySender,this.accountId).subscribe(
      res =>{
        if (res != null){
          console.log(res)

        let date  = ["Jan","Fev","Mars","Avr","Mai","Juin","Juill","Aout","Sept","Oct","Nov","Dec"]
        let currentDate = new Array();
        for( let i=0; i<= res.length; i++){
          currentDate.push(date[i]);
        }

        this.chartOptions = {
            series: [
              {
                name: "CBDC",
                data: res
              }
            ],
            chart: {
              height: 350,
              type: "bar"
            },
            plotOptions: {
              bar: {
                columnWidth: "50%",
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 2
            },

            grid: {
              row: {
                colors: ["#fff", "#f2f2f2"]
              }
            },
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: currentDate,
              tickPlacement: "on"
            },
            yaxis: {
              title: {
                text: "CBDC"
              }
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
              }
            }
          }}
          this.test = true;
          })




    this.centralBankService.getTxBySender(this.myRouterLink.linkGetAllTxBySender,this.accountId).subscribe(
      res => {
        if (res != null){
          this.transactions = res;

        }


      }
    )

    this._fetchData();
  }

    /**
 * Sort table data
 * @param param0 sort the column
 *

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    // this.service.sortColumn = column;
    // this.service.sortDirection = direction;
  }*/

  openModal(content: any) {
    // this.formData = this.formBuilder.group({
    //   amountToTransfert: ['', [Validators.required]],
    //   password: ['', [Validators.required]]
    // });
    this.modalService.open(content);
  }

  createMoney(){
    this.submitted = true;
    const currentDate = new Date();
    let moneyDetails = {
      "transactionInterBanks":{
        accountSender: this.authService.accountId,
        defaultAmount: 200.0,
        currentAmount: this.balance,
        amountToTransfert: this.formData.value.amountToTransfert,
        accountReceiver: this.authService.accountId,
        motifTransaction: "Création de la monnaie",
        pays: this.authService.pays,
        appFees: 0.0,
        centralBankFees: 0.0,
        date: currentDate
      },
     password: this.formData.value.password
    }
    console.log(moneyDetails)
    this.spinner.show();
    this.centralBankService.createMoney(this.myRouterLink.linkCreateMoney,moneyDetails).subscribe(
       res => {
         if(res != null){
          this.submitted = false;
          this._fetchData();
          this.alertService.successAlert('CBDC Crée ')
          this.modalService.dismissAll();
          this.spinner.hide();
          this.formData.reset();
         }else{
          this.alertService.errorAlert('Erreur de creation de CBDC')
          this.modalService.dismissAll();
          this.spinner.hide();
          this.formData.reset();
         }

       });
      }

  get form() {
    return this.formData.controls;
  }

  private _fetchData() {
    this.centralBankService.getCurrentBalence(this.myRouterLink.linkGetCurrentBalance,this.accountId).subscribe(
      res =>{
        console.log(res);
        this.balance = res;

      }
    );

  }

  abroad(){
    this.transfrontalier = true;
  }

  doTransfer(){
    this.submitted = true;
    const currentDate = new Date();
    if(this.transfrontalier == true){
    let moneyDetails = {
      "transactionInterBanks":{
        accountSender: this.authService.accountId,
        defaultAmount: 5.0,
        currentAmount: this.balance,
        amountToTransfert: this.sendForm.value.amountToTransfert,
        accountReceiver: this.sendForm.value.accountReceiver,
        motifTransaction: "CBDC Transférée",
        pays: this.sendForm.value.pays,
        appFees: 1.0,
        centralBankFees: 0.0,
        date: currentDate,
        nameDevise: this.sendForm.value.nameDevise
      },
     password: this.sendForm.value.password
    }
    this.spinner.show();
     this.centralBankService.sendMoney(this.myRouterLink.linkSendMoney,moneyDetails).subscribe(
       res => {
         if(res != null){
          this.submitted = false;
          this._fetchData();
          this.alertService.successAlert('CBDC Envoyé ')
          this.modalService.dismissAll();
          this.spinner.hide();
          this.sendForm.reset();
         }else{
          this.alertService.errorAlert('Erreur lors de l\'envoie de CBDC');
          this.modalService.dismissAll();
          this.spinner.hide();
          this.sendForm.reset();

         }

       });
    }else{
      let moneyDetails = {
        "transactionInterBanks":{
          accountSender: this.authService.accountId,
          defaultAmount: 5.0,
          currentAmount: this.balance,
          amountToTransfert: this.sendForm.value.amountToTransfert,
          accountReceiver: this.sendForm.value.accountReceiver,
          motifTransaction: "CBDC Transférée",
          pays: this.authService.pays,
          appFees: 1.0,
          centralBankFees: 0.0,
          date: currentDate
        },
       password: this.sendForm.value.password
      }
      this.spinner.show();

       this.centralBankService.sendMoney(this.myRouterLink.linkSendMoney,moneyDetails).subscribe(
         res => {
           if(res != null){
            this.submitted = false;
            this._fetchData();
            this.alertService.successAlert('CBDC Envoyé ')
            this.modalService.dismissAll();
            this.spinner.hide();
            this.sendForm.reset();
           }else{
            this.alertService.errorAlert('Erreur lors de l\'envoie de CBDC')
            this.modalService.dismissAll();
            this.spinner.hide();
            this.sendForm.reset();
           }

         });
    }
  }

}
