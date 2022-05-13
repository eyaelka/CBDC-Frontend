import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../../core/services/loader.service';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { MyRouterLink } from '../../../core/models/router-links';


@Component({
  selector: 'app-merchantform',
  templateUrl: './merchantform.component.html',
  styleUrls: ['./merchantform.component.scss']
})
export class MerchantformComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  merchantForm: FormGroup;
  myRouterLink: MyRouterLink = new MyRouterLink();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loaderService : LoaderService,
              private userService : GenericUserService) { }

  ngOnInit() {
    document.body.classList.add('auth-body-bg')

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
    bsCustomFileInput.init();
    this.merchantForm = this.formBuilder.group({
      businessName : ['',[Validators.required]],
      businessType : ['',[Validators.required]],
      email : ['',[Validators.required]],
      address : ['',[Validators.required]],
      agreement : ['',[Validators.required]],
      accountType :  ['',[Validators.required]],
      bankIndcation :  ['',[Validators.required]]
    })
  }
  validateAccount(){
    let request = {
      "merchantData":{
        businessName : this.merchantForm.value.businessName,
        businessType : this.merchantForm.value.businessType,
        email: this.merchantForm.value.email,
        address : this.merchantForm.value.address,
        agreement : this.merchantForm.value.agreement
      },
      accountType: this.merchantForm.value.accountType,
      bankIndcation: this.merchantForm.value.bankIndcation
     }
    console.log(request);
    this.userService.notifyAdmin(this.myRouterLink.linkNotifyAdmin,request).subscribe(
      res =>{
        this.router.navigate(['/login-2/features'])
      })
  }
}
