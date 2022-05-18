import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

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

  constructor() { }
}
