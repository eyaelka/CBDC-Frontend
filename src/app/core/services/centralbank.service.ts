import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CentralBankService{
  constructor(private http: HttpClient){}

  //define Masse Monetaire Regulation

  defineRegulationMoney(url,regulatory){
    return this.http.post<any>(url,regulatory);

  }

}
