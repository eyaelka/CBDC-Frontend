import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../../core/services/loader.service';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { MyRouterLink } from '../../../core/models/router-links';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';





@Component({
  selector: 'app-centralbankform',
  templateUrl: './centralbankform.component.html',
  styleUrls: ['./centralbankform.component.scss']
})
export class CentralbankformComponent implements OnInit {
// bread crumb items
breadCrumbItems: Array<{}>;
centralBankForm: FormGroup;
myRouterLink: MyRouterLink = new MyRouterLink();
submitted = false;


constructor(private formBuilder: FormBuilder,
            private router: Router,
            private loaderService : LoaderService,
            private userService : GenericUserService,
            private spinner: NgxSpinnerService,
            private alertService: AlertService) { }

ngOnInit() {
  document.body.classList.add('auth-body-bg')

  this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
  bsCustomFileInput.init();
  this.centralBankForm = this.formBuilder.group({
    nom : ['',[Validators.required]],
    pays : ['',[Validators.required]],
    adresse : ['',[Validators.required]],
    loiCreation : ['',[Validators.required]],
    email : ['',[Validators.required]],
    accountType :  [''],
    abreviation :  ['',[Validators.required]],
    phone :  ['',[Validators.required]]
  })
}
addCentralBankAccount(){
  this.submitted = true;
  let request = {
    "centralBankData":{
      nom : this.centralBankForm.value.nom,
      pays : this.centralBankForm.value.pays,
      adresse: this.centralBankForm.value.adresse,
      loiCreation : this.centralBankForm.value.loiCreation,
      email : this.centralBankForm.value.email
    },
    accountType: "courant",
   }
  console.log(request);
  this.spinner.show();
  this.userService.addUser(this.myRouterLink.linkAddCentralBank,request).subscribe(
    res =>{
      this.submitted = false;
      this.alertService.successAlert('Banque Centrale ajoutée ');
      this.spinner.hide();
      this.router.navigate(['/login']);
    })
}

get form() {
  return this.centralBankForm.controls;
}


}
