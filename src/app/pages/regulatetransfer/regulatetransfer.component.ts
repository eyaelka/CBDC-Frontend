import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/core/services/alert.service';
import  { RegulatorMoney } from '../../core/models/regulator-money.model';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { MyRouterLink } from 'src/app/core/models/router-links';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-regulatetransfer',
  templateUrl: './regulatetransfer.component.html',
  styleUrls: ['./regulatetransfer.component.scss']
})
export class RegulatetransferComponent implements OnInit {

openModal(content){
  this.modalService.open(content,{size : 'lg', backdrop: 'static' });
  this.formData.reset;


}


myRouterLink: MyRouterLink = new MyRouterLink();
  NgbNav: NgbNav;
  links = [
    {title: 'Regulation', id:1},
    {title: 'Confirmation', id:2}
  ]
   // bread crumb items
   breadCrumbItems: Array<{}>;
   formData: FormGroup;
   pass = false;
   activeID = 1;
   submitted = false;
   reg;






   constructor(private formBuilder: FormBuilder,
              private centralbankService: CentralBankService,
              private alertService: AlertService,
              private modalService : NgbModal,
              private spinner : NgxSpinnerService,
              private router: Router
              ) { }

   ngOnInit() {
    this.formData = this.formBuilder.group({
      pays: ['', [Validators.required]],
      seuilMaximumInterbank: ['', [Validators.required]],
      seuilMaximumAutresTX: ['', [Validators.required]],
      borneMinimum: ['', [Validators.required]],
      periode: ['', [Validators.required]],
      date: ['', [Validators.required]],
      motifRegulation: ['', [Validators.required]],
      centralBankFees: ['', [Validators.required]],
      paysBanqueCentral: ['', [Validators.required]]
    });

   }

   goToConfirm(){
    this.submitted = true;
    let regulator = {
      seuilMaximumInterbank: this.formData.value.seuilMaximumInterbank,
      seuilMaximumAutresTX: this.formData.value.seuilMaximumAutresTX,
      borneMinimum: this.formData.value.borneMinimum,
      pays: this.formData.value.pays,
      periode: this.formData.value.periode,
      date: this.formData.value.date,
      motifRegulation: this.formData.value.motifRegulation

    }
    if (regulator.motifRegulation  && regulator.pays && regulator.date && regulator.periode && regulator.borneMinimum
      && regulator.seuilMaximumAutresTX && regulator.seuilMaximumInterbank  ){
      this.submitted = false;
      this.activeID = 2;
      this.reg = regulator;

     }
   }

   get form (){
    return this.formData.controls;
   }

   goToConfirmEtrange(){
    this.submitted = true;
    let regulator = {
      seuilMaximumInterbank: this.formData.value.seuilMaximumInterbank,
      seuilMaximumAutresTX: this.formData.value.seuilMaximumAutresTX,
      borneMinimum: this.formData.value.borneMinimum,
      centralBankFees: this.formData.value.centralBankFees,
      pays: this.formData.value.pays,
      paysBanqueCentral: this.formData.value.paysBanqueCentral,
      periode: this.formData.value.periode,
      date: this.formData.value.date,
      motifRegulation: this.formData.value.motifRegulation

    }
    if (regulator.motifRegulation  && regulator.pays && regulator.date && regulator.periode && regulator.borneMinimum
      && regulator.seuilMaximumAutresTX && regulator.seuilMaximumInterbank && regulator.paysBanqueCentral && regulator.centralBankFees ){
      this.submitted = false;

      this.activeID = 2;
      this.reg = regulator;
     }
   }


   onSubmit(){
    this.submitted = true;

    this.formData = this.formBuilder.group({
      pays: ['', [Validators.required]],
      seuilMaximumInterbank: ['', [Validators.required]],
      seuilMaximumAutresTX: ['', [Validators.required]],
      borneMinimum: ['', [Validators.required]],
      periode: ['', [Validators.required]],
      date: ['', [Validators.required]],
      motifRegulation: ['', [Validators.required]],
    });
     console.log(this.reg)
     this.spinner.show();
    this.centralbankService.defineRegulationTransferLocal(this.myRouterLink.linkDefineRegulationLocalTransfer,this.reg).subscribe(
      res => {
        this.submitted = false;
        this.spinner.hide()
        this.alertService.successAlert('Régulation de Transfert Local ajoutée ')
        console.log(res)
        this.modalService.dismissAll();
        this.activeID = 1;
        this.router.navigateByUrl("/page/dashboards/centralbank")


      },
      err =>{
        this.spinner.hide();
        this.alertService.errorAlert('Erreur d\'Ajout du régulateur Transfert Local')
        this.modalService.dismissAll();
        this.activeID = 1;



      }
      )

   }

   onSubmitEtrange(){
    this.submitted = true;
    this.formData = this.formBuilder.group({
      pays: ['', [Validators.required]],
      seuilMaximumInterbank: ['', [Validators.required]],
      seuilMaximumAutresTX: ['', [Validators.required]],
      borneMinimum: ['', [Validators.required]],
      periode: ['', [Validators.required]],
      date: ['', [Validators.required]],
      motifRegulation: ['', [Validators.required]],
      centralBankFees: ['', [Validators.required]],
      paysBanqueCentral: ['', [Validators.required]]
    });
    console.log(this.reg)
    this.centralbankService.defineRegulationTransferEtranger(this.myRouterLink.linkDefineRegulationTransferAbroad,this.reg).subscribe(
      res => {
        this.submitted = false;
        this.alertService.successAlert('Régulation de Transfert Transfrontalier ajoutée ')
        console.log(res)
        this.modalService.dismissAll();
        this.activeID = 1;
        this.router.navigateByUrl("/page/dashboards/centralbank");


      },
      err =>{
        this.alertService.errorAlert('Erreur d\'Ajout du régulateur Transfert Transfrontalier')
        this.modalService.dismissAll();
        this.activeID = 1;



      }
      )
   }


   generatePDF(){
    var element = document.getElementById('table');
    html2canvas(element).then((canvas) => {
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png')

      var doc = new jsPDF("p", "mm", "a4");
      var imgHeight = canvas.height*208 / canvas.width
      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save("image.pdf");
    })
   }


}
