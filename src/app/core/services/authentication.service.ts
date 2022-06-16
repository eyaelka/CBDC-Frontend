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
  isMerchant = false;
  role = null;
  pays;
  accountId


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

  // //Who is logged in ?
  // isLoggedInDecode() {
  //   let myToken = localStorage.getItem("currentUser");
  //   let helper = new JwtHelperService();
  //   let decodedToken = helper.decodeToken(myToken);
  //   if (myToken) {
  //     if (decodedToken.roles == 'centralbank'){
  //       return this.isCentralBank = true;
  //     }else if (decodedToken.roles == 'commercialbank'){
  //      return this.isCommercialBank = true;
  //     }else if (decodedToken.roles =='user'){
  //       return this.isUser = true;
  //     }else if (decodedToken.roles =='merchant'){
  //       return this.isMerchant = true;
  //     }
  //   }
  // }


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
    this.router.navigate(['/start-page']);
  }

  //Remove refresh token
  public removeUserRefreshToken(): any{
    return localStorage.removeItem("refreshToken");
  }

  public getCountry() {
    let mytoken = localStorage.getItem("currentUser");
    let helper = new JwtHelperService();
    let decodedToken = helper.decodeToken(mytoken);
    if (decodedToken) {
      return decodedToken.getCountry;
    } else {
      return 'null'
    }
  }

  /**
   * decoding user access token to know who is logged in
   */
   public decodeUserAccesToken(){
    let accessToken: string= this.getUserToken();
    if(accessToken!=null){
      accessToken = accessToken.replace("Bearer ","");//remove header Bearer
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(accessToken);
      console.log(decodedToken)
      for(let i = 0; i < decodedToken.roles.length; i++ ){
       if(decodedToken.roles[i].authority == "centralbank"){
          this.role = "centralbank";
        }else if (decodedToken.roles[i].authority == "commercialbank"){
          this.role = "commercialbank";
        }else if (decodedToken.roles[i].authority == "user"){
          this.role = "user";
        }else if (decodedToken.roles[i].authority == "merchant"){
          this.role = "merchant";
        }else{
          this.pays = decodedToken.roles[i].authority;
        }
      }
      this.accountId = decodedToken.sub;
      console.log(this.accountId)
    }

  }


}
