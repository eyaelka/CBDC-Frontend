import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })

export class GenericUserService{
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}


  //Create User
  addUser(url,userDetails){
    let token = this.authenticationService.getUserToken();
    return this.http.post<any>(url,userDetails);
  }

  //Read User
  getUserById(url, userId){
    //retrieve the token
    let token = this.authenticationService.getUserToken();
    return this.http.get<any>(url,userId);
  }

  //Read All User
  getAll(url){
    return this.http.get<any>(url);
  }

  //Update User
  updateUser(url,data){
    //retrieve the token
    // let token = this.authenticationService.getUserToken();
    // return this.http.post<any>(url,data,{
    //   headers: new HttpHeaders({
    //     'Authorization': token
    //   })
    // });
    return this.http.post<any>(url,data);
  }

  //Email Verification
  sendEmailVerification(url:any,email: any){
    //let token = this.authenticationService.getUserToken();

    console.log(email)
    console.log(url)
    let sendEmail = this.http.post<any>(url,email/*,{
      headers: new HttpHeaders(
        {
          'Authorization':""
        }
      )
    }*/
      )
    console.log(sendEmail);
    return sendEmail;
  }

//Notify Admin
  notifyAdmin(url,endUser){
    return this.http.post<any>(url,endUser);
}

//Desactiver User
deactivateUser(url,endUser){
  return this.http.post<any>(url,endUser);
}









}
