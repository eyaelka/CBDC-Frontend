import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericUserService } from '../../core/services/generic-user.service';
import { CommercialBanks } from './commercialbank.model';
import { LoaderService } from '../../core/services/loader.service';



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
  submitted = false;
  commercialBankData: CommercialBanks[] = [{name:"ab",abreviation : "ab",email:"ab@gmail.com",fax :"21" ,address:"ab",balance:"12",date:"12/12/12"}];
  term: any;
  request ;


  // page
  currentpage: number;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
              private userService: GenericUserService, private loaderService: LoaderService) { }

  ngOnInit() {


    this.formData = this.formBuilder.group({
      name: ['', [Validators.required]],
      abreviation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fax: ['', [Validators.required]],
      address: ['', [Validators.required]],
      balance: ['', [Validators.required]],

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
    this.modalService.open(content);
  }
  openModalEdit(content: any){
    this.modalService.open(content);

  }

  saveCustomer() {
    const currentDate = new Date();
    let userDetails = {...this.formData.value, deactivate: false}
    console.log(userDetails);


     this.userService.addUser('http://localhost:10051/commercialbank/create',userDetails).subscribe(
       res => {
        this.commercialBankData.push(userDetails)
       }
     )
     this.modalService.dismissAll()
     console.log(this.commercialBankData);
}

editCustomer(){
  const currentDate = new Date();
    let userDetails = {...this.formData.value, deactivate: false}
    console.log(userDetails);


     this.userService.addUser('http://localhost:10051/commercialbank/update',userDetails).subscribe(
       res => {
        this.commercialBankData.push(userDetails)
       }
     )
     this.modalService.dismissAll()
     console.log(this.commercialBankData);

}
}
