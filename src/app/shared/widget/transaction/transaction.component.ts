import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transactions: Array<{
   accountSender?: string;
   defaultAmount?: Number;
   currentAmount?: Number;
  amountToTransfert?: Number;
  accountReceiver?: string;
  motifTransaction?: string;
  pays?: string;
  appFees?: number;
  centralBankFees?: number;// centralBankFees >0 si la TX est transfrontalière
  date?: string;
  nameDevise?: string;
  }>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
