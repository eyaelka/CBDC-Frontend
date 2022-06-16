import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericUserService } from '../../core/services/generic-user.service';
import { EndUserAccountInfo } from 'src/app/core/models/enduseraccount.model';
import { LoaderService } from '../../core/services/loader.service';
import { MyRouterLink } from '../../core/models/router-links';
import { AlertService } from '../../core/services/alert.service';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formData: FormGroup;
  formDataDeactivate:FormGroup;
  submitted = false;
  endUserData: any = [];
  term: any;
  request ;
  oldData: any;
  myRouterLink: MyRouterLink = new MyRouterLink();
  deactivateData;
  deactivateAccountId;
  suspendFlag: false;
  editted = false;
  deactivated= false;
  enduser: EndUserAccountInfo;
  allUserAccounts;
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
      cin:['', [Validators.required]],
      nom:['', [Validators.required]],
      dateNaissance:['', [Validators.required]],
      adresse:['', [Validators.required]],
      nationalite:['', [Validators.required]],
      telephone:['', [Validators.required]],
      email:['', [Validators.required]],
      bankWhoAddUser:['', [Validators.required]],
      suspend:['', [Validators.required]],
      bankIndication:['', [Validators.required]]
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
    this.endUserData ;
     this.userService.getAll(this.myRouterLink.linkGetAllUsers).subscribe(
      res => {
        console.log(res)
        if (res != null){
          this.enduser = res
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
  // openModal(content: any) {
  //   this.formData = this.formBuilder.group({
  //     name: ['', [Validators.required]],
  //     abreviation: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //     fax: ['', [Validators.required]],
  //     address: ['', [Validators.required]],
  //     pays: ['', [Validators.required]],
  //     accountType: ['', [Validators.required]]

  //   });
  //   this.modalService.open(content);
  // }

  openModalEdit(content: any, oldData: any){

    //this.formData.reset;
    this.oldData = oldData;
    console.log(oldData)
    this.formData = this.formBuilder.group({
      cin: [oldData.endUserData.cin, [Validators.required]],
      nom: [oldData.endUserData.nom, [Validators.required]],
      dateNaissance: [oldData.endUserData.dateNaissance, [Validators.required]],
      adresse: [oldData.endUserData.adresse, [Validators.required]],
      nationalite: [oldData.endUserData.nationalite, [Validators.required]],
      telephone: [oldData.endUserData.telephone, [Validators.required]],
      email: [oldData.endUserData.email, [Validators.required]],
      bankWhoAddUser: [oldData.endUserData.bankWhoAddUser, [Validators.required]],

    });
    this.modalService.open(content);

  }

  openModalDeactivate(content: any, deactivateData){
    this.oldData = deactivateData
    this.allUserAccounts = this.oldData.endUserAccounts;
    console.log(this.allUserAccounts)
    this.deactivateAccountId = deactivateData.compteId
    this.modalService.open(content);
  }

//   saveCustomer() {
//     this.submitted = true;
//     const currentDate = new Date();
//     let userDetails = {
//       "commercialBankData":{
//         name: this.formData.value.name,
//         abreviation: this.formData.value.abreviation,
//         pays: this.formData.value.pays,
//         email: this.formData.value.email,
//         fax: this.formData.value.fax,
//         address: this.formData.value.address
//       },
//       accountType: this.formData.value.accountType,
//       suspend:false,
//       date:currentDate
//     }
//     this.spinner.show();
//      this.userService.addUser(this.myRouterLink.linkAddCommercialBank,userDetails).subscribe(
//        res => {
//          this.submitted = false;
//         if(res != null){
//           let userData = {
//             user: userDetails,
//             compteId: res.compteId
//           };
//           this.commercialBankData.push(userData);
//           this.spinner.hide();
//           this.alertService.successAlert('Banque Commerciale Ajoutée ')
//           this.modalService.dismissAll();
//           this.router.navigateByUrl('/page/commercialbank');
//         }
//        },
//        err => {
//         this.spinner.hide();
//          this.alertService.errorAlert('Erreur d\'Ajout de la banque commerciale')
//         this.modalService.dismissAll();
//         this.router.navigateByUrl('/page/commercialbank')
//        }
//      );

// }

editCustomer(){
   //this.editted = true;
  let user = {
    "endUserData":{
      ...this.formData.value,
    },
    compteId: this.oldData.endUserAccounts[0].accountId
  }
  console.log(user)

  let userToEdit = {
    "endUserData":{
      cin: user.endUserData.cin,
      nom: user.endUserData.nom,
      dateNaissance: user.endUserData.dateNaissance,
      adresse: user.endUserData.adresse,
      nationalite: user.endUserData.nationalite,
      telephone: user.endUserData.telephone,
      email: user.endUserData.email,
      bankWhoAddUser: user.endUserData.bankWhoAddUser,

    },
    endUserAccountId: user.compteId

  }
  this.spinner.show();
  this.userService.updateUser(this.myRouterLink.linkUserUpdate,userToEdit).subscribe(

    (res) => {
          if (res != null){
            let updatedUser = {
              user: {
                "endUserData":{
                  cin: user.endUserData.cin,
                  nom: user.endUserData.nom,
                  dateNaissance: user.endUserData.dateNaissance,
                  adresse: user.endUserData.adresse,
                  nationalite: user.endUserData.nationalite,
                  telephone: user.endUserData.telephone,
                  email: user.endUserData.email,
                  bankWhoAddUser: user.endUserData.bankWhoAddUser,

                },
                accountType: this.formData.value.accountType,
                suspend:false,
                date: new Date()

              },
              compteId: user.compteId
            }


          let endUserDataTemp: any = [];
          for (let i=0; i< this.endUserData.length;i++){
            if( this.endUserData[i].compteId != this.oldData.compteId){
              endUserDataTemp.push(this.endUserData[i]);
              }
           }
           endUserDataTemp.push(updatedUser)
           this.endUserData = endUserDataTemp
           this.spinner.hide();
           this.alertService.successAlert('Utilisateur Modifié ')
           this.modalService.dismissAll()
           this.router.navigateByUrl('/page/users')

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
    this.userService.deactivateUser(this.myRouterLink.linkDesactivateUser,user).subscribe(
    res =>{
      if(res != null){
        console.log(res)
      }
      this.alertService.successAlert('Compte Utilisateur Suspendu ')
      this.modalService.dismissAll()
      this.spinner.hide();



    }
  )
  }
 }

}
