import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new BehaviorSubject(false);
  private showSpinner = new Subject();
  getData() {
    return this.showSpinner;
  }
  activate() {
    this.showSpinner.next(true);
  }
  deactivate() {
    this.showSpinner.next(false);
  }

  constructor() { }
}
