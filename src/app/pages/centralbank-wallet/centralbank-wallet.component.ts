// import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
// import { DecimalPipe } from '@angular/common';
// import { Observable } from 'rxjs';

// import { CentralbankWalletService } from './centralbank-wallet.service';
// import {  CentralBankWalletSortableService, SortEvent } from './centralbank-wallet-sortable.directive';

// import { ChartType, Activities } from './centralbank-wallet.model';

// import { OveviewChart, activitiesData } from './data';

// @Component({
//   selector: 'app-centralbank-wallet',
//   templateUrl: './centralbank-wallet.component.html',
//   styleUrls: ['./centralbank-wallet.component.scss']
// })
// export class CentralbankWalletComponent implements OnInit {
//   OveviewChart: ChartType;
//   activitiesData: Activities[];

//     activities$: Observable<Activities[]>;
//     total$: Observable<number>;

//   @ViewChildren(CentralBankWalletSortableService) headers: QueryList<CentralBankWalletSortableService>;

//   constructor(public service: CentralbankWalletService) {
//     this.activities$ = service.activities$;
//     this.total$ = service.total$;
//   }
//   ngOnInit(): void {
//     this.OveviewChart = OveviewChart;
//     this.activitiesData = activitiesData;
//   }

//     /**
//  * Sort table data
//  * @param param0 sort the column
//  *
//  */
//   onSort({ column, direction }: SortEvent) {
//     // resetting other headers
//     this.headers.forEach(header => {
//       if (header.sortable !== column) {
//         header.direction = '';
//       }
//     });
//     this.service.sortColumn = column;
//     this.service.sortDirection = direction;
//   }

// }
