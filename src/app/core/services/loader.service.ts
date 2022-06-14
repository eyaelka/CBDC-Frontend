import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // private _loading = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this._loading.asObservable();

  constructor() {}

  // show() {
  //   this._loading.next(true);
  // }

  // hide() {
  //   this._loading.next(false);
  // }



  public isLoading = new BehaviorSubject(false);
  getData() {
    return this.isLoading;
  }
  activate() {
    this.isLoading.next(true);
  }
  deactivate() {
    this.isLoading.next(false);
  }

  //constructor() { }
}
