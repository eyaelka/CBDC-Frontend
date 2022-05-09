import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-features',
  templateUrl: './login-features.component.html',
  styleUrls: ['./login-features.component.scss']
})
export class LoginFeaturesComponent implements OnInit {

  successmsg;
  role;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.successmsg = true;
              if (this.successmsg) {
                //window.location.href ='https://mail.google.com/';
                window.open('https://mail.google.com/')
              }

  }

}
