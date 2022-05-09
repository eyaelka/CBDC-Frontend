import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../../core/services/loader.service';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-merchantform',
  templateUrl: './merchantform.component.html',
  styleUrls: ['./merchantform.component.scss']
})
export class MerchantformComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  addMerchantForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loaderService : LoaderService,
              private userService : GenericUserService) { }

  ngOnInit() {
    document.body.classList.add('auth-body-bg')

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
    bsCustomFileInput.init();
    this.addMerchantForm = this.formBuilder.group({
      businessName : ['',[Validators.required]],
      businessType : ['',[Validators.required]],
      address : ['',[Validators.required]],
      agreement : ['',[Validators.required]]
    })
  }

  addMerchant(){
    let addRequest = {
      address : this.addMerchantForm.value.address,
      agreement : this.addMerchantForm.value.agreement,
      businessName : this.addMerchantForm.value.businessName,
      businessType : this.addMerchantForm.value.businessType,
      email: 'eya.elkamel@etudiant-fst.utm.tn'

    }
    console.log(addRequest);
    this.userService.addUser('http://localhost:10054/merchant/create',addRequest).subscribe(
      res =>{
        this.router.navigate(['/login-2/features'])
      })


  }


  
}
