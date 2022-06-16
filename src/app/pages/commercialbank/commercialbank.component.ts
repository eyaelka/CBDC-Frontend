import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericUserService } from '../../core/services/generic-user.service';
import { CommercialBankAccountInfo } from '../../core/models/commercialbank-account';
import { LoaderService } from '../../core/services/loader.service';
import { MyRouterLink } from '../../core/models/router-links';
import { AlertService } from '../../core/services/alert.service';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


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
  editted = false;
  deactivated= false;
  commercialbank: CommercialBankAccountInfo;
  allBankAccounts;
  selectedAccountId = null;



  // page
  currentpage: number;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
              private userService: GenericUserService, private loaderService: LoaderService,
              private alertService: AlertService, private centralbankService: CentralBankService,
              private spinner: NgxSpinnerService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    let myToken = this.authService.decodeUserAccesToken();

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
    this.centralbankService.getAllCommercialBanks(this.myRouterLink.linkGetAllCommercialBanks).subscribe(
      res => {
        console.log(res)
        if (res != null){
          this.commercialbank = res
        }else{
          alert("error");
        }
      }
    )

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

    //this.formData.reset;
    this.oldData = oldData;
    console.log(oldData)
    this.formData = this.formBuilder.group({
      name: [oldData.commercialBankData.name, [Validators.required]],
      abreviation: [oldData.commercialBankData.abreviation, [Validators.required]],
      email: [oldData.commercialBankData.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fax: [oldData.commercialBankData.fax, [Validators.required]],
      address: [oldData.commercialBankData.address, [Validators.required]],
      pays: [oldData.commercialBankData.pays, [Validators.required]]

    });
    this.modalService.open(content);

  }

  openModalDeactivate(content: any, deactivateData){
    this.oldData = deactivateData
    this.allBankAccounts = this.oldData.commercialBankAccounts;
    console.log(this.allBankAccounts)
    this.deactivateAccountId = deactivateData.compteId
    this.modalService.open(content);
  }

  saveCustomer() {
    this.submitted = true;
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
    this.spinner.show();
     this.userService.addUser(this.myRouterLink.linkAddCommercialBank,userDetails).subscribe(
       res => {
         this.submitted = false;
        if(res != null){
          let userData = {
            user: userDetails,
            compteId: res.compteId
          };
          this.commercialBankData.push(userData);
          this.spinner.hide();
          this.alertService.successAlert('Banque Commerciale Ajoutée ')
          this.modalService.dismissAll();
          this.router.navigateByUrl('/page/commercialbank');
        }
       },
       err => {
        this.spinner.hide();
         this.alertService.errorAlert('Erreur d\'Ajout de la banque commerciale')
        this.modalService.dismissAll();
        this.router.navigateByUrl('/page/commercialbank')
       }
     );

}

editCustomer(){
   //this.editted = true;
  let user = {
    "commercialBankData":{
      ...this.formData.value,
    },
    compteId: this.oldData.commercialBankAccounts[0].accountId
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
  this.spinner.show();
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
           this.spinner.hide();
           this.alertService.successAlert('Banque Commerciale Modifiée ')
           this.modalService.dismissAll()
          }
    },
    err =>{
      this.spinner.hide();
      this.alertService.errorAlert('Erreur au cours de la modification du compte')
      this.modalService.dismissAll()
    }
  )
 }

 openDeleteAlert(){


 }

 onSelectionChang(compteId){
  this.selectedAccountId = compteId
  console.log (this.selectedAccountId)
 }

 deactivateCustomer(){
  if (this.selectedAccountId != null){
    let user = {
      bankAccountId:this.authService.accountId,
      endUserAccountId: this.selectedAccountId,
      suspendFlag: true,
      newAccountType:"keep the same"
     }
     console.log(user);
     this.spinner.show();
    this.userService.deactivateUser(this.myRouterLink.linkDeactivateCommercialBank,user).subscribe(
    res =>{
      if(res != null){
        console.log(res)
      }
      this.alertService.successAlert('Compte Banque Commerciale Suspendu ')
      this.modalService.dismissAll()
      this.spinner.hide();



    }
  )
  }
 }

}
