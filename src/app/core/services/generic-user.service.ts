import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

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
  updateUser(url,userDetails,userId){
    //retrieve the token
    let token = this.authenticationService.getUserToken();
    return this.http.post<any>(url,userDetails,userId);
  }

  //Email Verification
  sendEmail(url, email){
    return this.http.post<any>(url,email);
  }

  // //Notify Admin
  // notifyAdmin(url,endUser){
  //   return this.http.post<any>(url,endUser);
  // }










}
