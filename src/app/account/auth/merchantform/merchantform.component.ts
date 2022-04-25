import { Component, OnInit } from '@angular/core';

import bsCustomFileInput from 'bs-custom-file-input';


@Component({
  selector: 'app-merchantform',
  templateUrl: './merchantform.component.html',
  styleUrls: ['./merchantform.component.scss']
})
export class MerchantformComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    document.body.classList.add('auth-body-bg')

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Elements', active: true }];
    bsCustomFileInput.init();
  }



}
