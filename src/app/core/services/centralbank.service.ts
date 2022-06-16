import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CentralBankService{
  constructor(private http: HttpClient){}

  //define Masse Monetaire Regulation

  defineRegulationMoney(url,regulatory){
    return this.http.post<any>(url,regulatory,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Access-Control-Expose-Headers':'Access-Control-Allow-Origin, Access-Control-Allow-Credentials'
      })
    }
    );

  }

  defineRegulationDevise(url,regulatory){
    return this.http.post<any>(url,regulatory)
  }

  defineRegulationTransferLocal(url,regulatory){
    return this.http.post<any>(url,regulatory)
  }

  defineRegulationTransferEtranger(url,regulatory){
    return this.http.post<any>(url,regulatory)
  }

  getLastRegulation(url,pays){
    return this.http.get<any>(url+"/"+pays)
  }

  getAllCommercialBanks(url){
    return this.http.get<any>(url)
  }

  getCurrentBalence(url,sender){
    return this.http.post<any>(url,sender);
  }

  createMoney(url,amount){
    return this.http.post<any>(url,amount);
  }

  sendMoney(url,amount){
    return this.http.post<any>(url,amount);
  }

  getAllMoneySentBySender(url,sender){
    return this.http.get<any>(url+"/"+sender);
  }

  getTxBySender(url,sender){
    return this.http.get<any>(url+"/"+sender);
  }

  getSentRecieve(url, sender){
    return this.http.post<any>(url,sender);
  }

}
