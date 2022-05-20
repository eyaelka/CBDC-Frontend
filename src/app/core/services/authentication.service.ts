import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { AccountIdAndPassword } from '../models/account-id-and-password.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  isCentralBank = false;
  isCommercialBank = false;
  isUser = false;


  constructor (private router: Router, private http: HttpClient){}

  //Register the user
  registerUser(url,user){
    return this.http.post<any>(url,user);
  }

  //Login the user
  login(url,userLogin: AccountIdAndPassword){
    return this.http.post<any>(url,userLogin, {observe:'response'/*,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Access-Control-Expose-Headers':'Access-Control-Allow-Origin, Access-Control-Allow-Credentials'
  })*/

})
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
  saveTokenLocalStorage(user,jwt){
    localStorage.setItem(user, jwt);
  }

  //Get the authenticated user token : access token
  getUserToken(){
    return localStorage.getItem("currentUser");
  }

  //Get refresh token
  public getUserRefreshToken(): any{
    return localStorage.getItem("refreshToken");
  }

  //Save refresh token
  public saveRefreshTokenLocalStorage(jwt: any){
    localStorage.setItem("refreshToken",jwt);
  }


  //Remove the token
  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }

  //Remove refresh token
  public removeUserRefreshToken(): any{
    return localStorage.removeItem("refreshToken");
  }


}
