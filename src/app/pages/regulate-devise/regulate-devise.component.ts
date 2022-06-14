import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/core/services/alert.service';
import  { RegulatorMoney } from '../../core/models/regulator-money.model';

import { MyRouterLink } from 'src/app/core/models/router-links';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-regulate-devise',
  templateUrl: './regulate-devise.component.html',
  styleUrls: ['./regulate-devise.component.scss']
})
export class RegulateDeviseComponent implements OnInit {

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
              private spinner: NgxSpinnerService
              ) { }

   ngOnInit() {
    this.formData = this.formBuilder.group({
      tauxAchat: ['', [Validators.required]],
      tauxVente: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      date: ['', [Validators.required]],
      motifVariation: ['', [Validators.required]]
    });







   }

   goToConfirm(){
    this.submitted = true;
    let regulator = {
      pays: this.formData.value.pays,
      nom: this.formData.value.nom,
      tauxAchat: this.formData.value.tauxAchat,
      tauxVente: this.formData.value.tauxVente,
      date: this.formData.value.date,
      motifVariation: this.formData.value.motifVariation

    }
    console.log(regulator)
    if (regulator.pays  && regulator.nom && regulator.tauxAchat && regulator.tauxVente && regulator.date && regulator.motifVariation ){
      this.activeID = 2;
      this.reg = regulator;
     }
   }

   get form (){
    return this.formData.controls;
   }

   onSubmit(){
     console.log(this.reg)
     this.spinner.show();
    this.centralbankService.defineRegulationDevise(this.myRouterLink.linkDefineRegulationDevise,this.reg).subscribe(
      res => {
        this.alertService.successAlert('Régulation Devise ajoutée ')
        this.spinner.hide();
      },
      err =>{
        this.alertService.errorAlert('Erreur d\'Ajout du régulateur devise')
        this.spinner.show();

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
