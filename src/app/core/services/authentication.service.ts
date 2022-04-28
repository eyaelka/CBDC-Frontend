import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  isCentralBank = false;
  isCommercialBank = false;
  isUser = false;

  URL ="http://localhost:10050"

  constructor (private router: Router, private http: HttpClient){}

  //Register the user
  registerUser(url,user){
    return this.http.post<any>(url,user);
  }

  //Login the user
  login(url,username,password){
    return this.http.post<any>(url,{username,password});
  }

  //Return true if user is logged in
  getLoggedIn(): boolean{
    return (localStorage.getItem("currentUser") != null);
  }

  //Who is logged in ?
  isLoggedInDecode() {
    let myToken = localStorage.getItem("currentUser");
    let helper = new JwtHelperService();
    let decodedToken = helper.decodeToken(myToken);
    if (myToken) {
      if (decodedToken.role == 'BC'){
        return this.isCentralBank = true;
      }else if (decodedToken.role == 'BSR'){
       return this.isCommercialBank = true;
      }else{
        return this.isUser = true
      }
    }
  }

  //Save token
  saveTokenLocalStorage(jwt){
    localStorage.setItem("currentUser", jwt);
  }

  //Get the token
  getUserToken(){
    return localStorage.getItem("currentUser");
  }

  //Remove the token
  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }

  //Send Email Verification
  sendEmail(url,email){
    return this.http.post<any>(url,email);
  }

}
