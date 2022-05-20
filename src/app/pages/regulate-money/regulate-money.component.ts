import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CentralBankService } from 'src/app/core/services/centralbank.service';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-regulate-money',
  templateUrl: './regulate-money.component.html',
  styleUrls: ['./regulate-money.component.scss']
})
export class RegulateMoneyComponent implements OnInit {
  NgbNav: NgbNav;
  links = [
    {title: 'Regulation', id:1},
    {title: 'Confirmation', id:2}
  ]
   // bread crumb items
   breadCrumbItems: Array<{}>;
   formData: FormGroup;



   constructor(private formBuilder: FormBuilder,
              private centralbankService: CentralBankService) { }

   ngOnInit() {
    this.formData = this.formBuilder.group({
      tauxReserveObligatoir: ['', [Validators.required]],
      tauxDirecteur: ['', [Validators.required]],
      tauxNegatif: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      motifRegulation: ['', [Validators.required]],
    });


   }


}
