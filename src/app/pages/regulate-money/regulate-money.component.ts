import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/core/services/alert.service';
import  { RegulatorMoney } from '../../core/models/regulator-money.model';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { MyRouterLink } from 'src/app/core/models/router-links';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-regulate-money',
  templateUrl: './regulate-money.component.html',
  styleUrls: ['./regulate-money.component.scss']
})
export class RegulateMoneyComponent implements OnInit {
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
              private spinner: NgxSpinnerService,
              private router : Router
              ) { }

   ngOnInit() {
    this.formData = this.formBuilder.group({
      tauxReserveObligatoir: ['', [Validators.required]],
      tauxDirecteur: ['', [Validators.required]],
      tauxNegatif: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      date: ['', [Validators.required]],
      motifRegulation: ['', [Validators.required]],
    });







   }

   goToConfirm(){
    this.submitted = true;
    let regulator = {
      tauxReserveObligatoir: this.formData.value.tauxReserveObligatoir,
      tauxDirecteur: this.formData.value.tauxDirecteur,
      tauxNegatif: this.formData.value.tauxNegatif,
      pays: this.formData.value.pays,
      date: this.formData.value.date,
      motifRegulation: this.formData.value.motifRegulation
    }
    if (regulator.motifRegulation  && regulator.pays && regulator.tauxDirecteur && regulator.tauxNegatif && regulator.tauxReserveObligatoir
      && regulator.date ){
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
    this.centralbankService.defineRegulationMoney(this.myRouterLink.linkDefineRegulationMoney,this.reg).subscribe(
      res => {
        if (res != null){
          this.alertService.successAlert('Régulation masse monétaire ajoutée ');
          console.log(res)
          this.spinner.hide();
          this.router.navigateByUrl("/page/dashboards/centralbank")
        }else{
          this.alertService.errorAlert('Erreur d\'Ajout du régulateur masse monétaire');
          this.spinner.hide();
        }
      })

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
