import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericUserService } from '../../core/services/generic-user.service';
import { CommercialBankAccountInfo } from '../../core/models/commercialbank-account';
import { LoaderService } from '../../core/services/loader.service';
import { MyRouterLink } from '../../core/models/router-links';
import { AlertService } from '../../core/services/alert.service';


@Component({
  selector: 'app-commercialbank',
  templateUrl: './commercialbank.component.html',
  styleUrls: ['./commercialbank.component.scss']
})

/**
 * CommercialBanks component
 */
export class CommercialbankComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formData: FormGroup;
  formDataDeactivate:FormGroup;
  submitted = false;
  commercialBankData: any = [];
  term: any;
  request ;
  oldData: any;
  myRouterLink: MyRouterLink = new MyRouterLink();
  deactivateData;
  deactivateAccountId;
  suspendFlag: false;



  // page
  currentpage: number;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
              private userService: GenericUserService, private loaderService: LoaderService,
              private alertService: AlertService
           ) { }

  ngOnInit() {


    this.formData = this.formBuilder.group({
      name: ['', [Validators.required]],
      abreviation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fax: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      accountType: ['', [Validators.required]]

    });

    this.formDataDeactivate = this.formBuilder.group({
      bankAccountId: ['', [Validators.required]],
      endUserAccountId: ['', [Validators.required]],
      suspendFlag:['', [Validators.required]],
    });

    this.currentpage = 1;

    /**
     * Fetches the data
     */
    this._fetchData();

  }

  /**
   * Customers data fetches
   */
  private _fetchData() {
    this.commercialBankData ;
  }
  get form() {
    return this.formData.controls;
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.formData = this.formBuilder.group({
      name: ['', [Validators.required]],
      abreviation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fax: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      accountType: ['', [Validators.required]]

    });
    this.modalService.open(content);
  }

  openModalEdit(content: any, oldData: any){
    this.oldData = oldData;
    this.modalService.open(content);

  }

  openModalDeactivate(content: any, deactivateData){
    this.deactivateAccountId = deactivateData.compteId
    this.modalService.open(content);
  }

  saveCustomer() {
    const currentDate = new Date();
    let userDetails = {
      "commercialBankData":{
        name: this.formData.value.name,
        abreviation: this.formData.value.abreviation,
        pays: this.formData.value.pays,
        email: this.formData.value.email,
        fax: this.formData.value.fax,
        address: this.formData.value.address
      },
      accountType: this.formData.value.accountType,
      suspend:false,
      date:currentDate
    }
     this.userService.addUser(this.myRouterLink.linkAddCommercialBank,userDetails).subscribe(
       res => {
        if(res != null){
          let userData = {
            user: userDetails,
            compteId: res.compteId
          };
          console.log(userData);
          this.commercialBankData.push(userData);
          this.modalService.dismissAll();

        }
       },
       err => {
        this.modalService.dismissAll();
       }
     );

}

editCustomer(){
  let user = {
    "commercialBankData":{
      ...this.formData.value,
    },
    compteId: this.oldData.compteId
  }
  console.log(user)

  let userToEdit = {
    "commercialBankData":{
      name:user.commercialBankData.name,
      abreviation:user.commercialBankData.abreviation,
      email:user.commercialBankData.email,
      fax:user.commercialBankData.fax,
      address:user.commercialBankData.address,
      pays:user.commercialBankData.pays
    },
    commercialBankAccountId: user.compteId
  }

  this.userService.updateUser(this.myRouterLink.linkUpdateCommercialBank,userToEdit).subscribe(
    (res) => {
          if (res != null){
            let updatedUser = {
              user: {
                "commercialBankData":{
                  name: user.commercialBankData.name,
                  abreviation: user.commercialBankData.abreviation,
                  pays: user.commercialBankData.pays,
                  email: user.commercialBankData.email,
                  fax: user.commercialBankData.fax,
                  address: user.commercialBankData.address
                },
                accountType: this.formData.value.accountType,
                suspend:false,
                date: new Date()

              },
              compteId: user.compteId
            }

          let commercialBankDataTemp: any = [];
          for (let i=0; i< this.commercialBankData.length;i++){
            if( this.commercialBankData[i].compteId != this.oldData.compteId){
                commercialBankDataTemp.push(this.commercialBankData[i]);
              }
           }
           commercialBankDataTemp.push(updatedUser)
           this.commercialBankData = commercialBankDataTemp

           this.modalService.dismissAll()
          }
    },
    err =>{
      this.modalService.dismissAll()
    }
  )
 }

 openDeleteAlert(){


 }

 deactivateCustomer(){

   let user = {
    bankAccountId:this.formDataDeactivate.value.bankAccountId,
    endUserAccountId: this.deactivateData.compteId,
    suspendFlag: true,
    newAccountType:"keep the same"
   }
   console.log(user)

   this.userService.deactivateUser(this.myRouterLink.linkDeactivateCommercialBank,user).subscribe(
     res => {
       console.log(res);
       this.modalService.dismissAll();


     }
   )



 }

}
