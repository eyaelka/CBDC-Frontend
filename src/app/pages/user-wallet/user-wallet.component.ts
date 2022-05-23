import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { UserWalletService } from './user-wallet.service';
import {  UserWalletSortableService, SortEvent } from './user-wallet-sortable.directive';

import { ChartType, Activities } from './user-wallet.model';

import { OveviewChart, activitiesData } from './data';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.scss']
})
export class UserWalletComponent implements OnInit {
  OveviewChart: ChartType;
  activitiesData: Activities[];

    activities$: Observable<Activities[]>;
    total$: Observable<number>;

  @ViewChildren(UserWalletSortableService) headers: QueryList<UserWalletSortableService>;

  constructor(public service: UserWalletService) {
    this.activities$ = service.activities$;
    this.total$ = service.total$;
  }
  ngOnInit(): void {
    this.OveviewChart = OveviewChart;
    this.activitiesData = activitiesData;
  }

    /**
 * Sort table data
 * @param param0 sort the column
 *
 */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
