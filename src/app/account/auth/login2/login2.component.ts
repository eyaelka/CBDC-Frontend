import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AccountIdAndPassword } from '../../../core/models/account-id-and-password.model';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
/**
 * Login-2 component
 */
export class Login2Component implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthenticationService) { }
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  accountIdAndPassword: AccountIdAndPassword = new AccountIdAndPassword();


  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')
    this.loginForm = this.formBuilder.group({
      identifiant: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      680: {
        items: 1
      },
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onLogin(accountIdAndPassword) {
    let url;
    this.submitted = true;
    accountIdAndPassword.compteId = this.f.identifiant.value;
    accountIdAndPassword.password = this.f.password.value;
    if (accountIdAndPassword.compteId.substring(accountIdAndPassword.compteId.length-2,accountIdAndPassword.compteId.length) == "us"){
      this.authService.login("http://localhost:10053/login",accountIdAndPassword).subscribe(
        (res) => {
          if (res != null){
            let jwt = res.headers.get('Authorization');
            this.authService.saveTokenLocalStorage("userToken",jwt);
            this.router.navigate(['/page/dashboards/*'])

          }
        },
        (err) => {
          console.log(err);
        })
    }else if (accountIdAndPassword.compteId.substring(accountIdAndPassword.compteId.length-2,accountIdAndPassword.compteId.length) == "me"){
      this.authService.login("http://localhost:10054/login",accountIdAndPassword).subscribe(
        (res) => {
          if ( res != null){
            let jwt = res.headers.get('Authorization');
            this.authService.saveTokenLocalStorage("merchantToken",jwt);
            this.router.navigate(['/page/dashboards/saas'])

          }
        },
        (err) => {
          console.log(err);
        })
    }

    // this.authService.login(url,this.loginForm.value).subscribe(
    //   res =>{

    //   }
   //)










    // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (environment.defaultauth === 'firebase') {
  //       this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
  //         this.router.navigate(['/dashboard']);
  //       })
  //         .catch(error => {
  //           this.error = error ? error : '';
  //         });
  //     } else {
  //       this.authFackservice.login(this.f.email.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //           data => {
  //             this.router.navigate(['/dashboard']);
  //           },
  //           error => {
  //             this.error = error ? error : '';
  //           });
  //     }
  //   }
   }
}
