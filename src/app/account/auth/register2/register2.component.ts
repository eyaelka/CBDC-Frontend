import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  myRouterLink = "/email-verification/user";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserProfileService) { }
  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')

    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['user',Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

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

  /**
   * On submit form
   */

  setRouter(type){
    if (type === 1){
      this.myRouterLink = '/email-verification/user'
    }
    else{
      this.myRouterLink = '/email-verification/merchant'
    }
    console.log(this.myRouterLink);
  }

  onSubmit() {
   this.router.navigate([this.myRouterLink]);
   console.log(this.router.url);
      }

    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.signupForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.register(this.f.email.value).then((res: any) => {
    //       this.successmsg = true;
    //       if (this.successmsg) {
    //         this.router.navigate(['/dashboard']);
    //       }
    //     })
    //       .catch(error => {
    //         this.error = error ? error : '';
    //       });
    //   } else if (this.signupForm.value.type == 'user'){
    //     this.userService.register(this.signupForm.value)
    //       .pipe(first())
    //       .subscribe(
    //         data => {
    //           this.successmsg = true;
    //           if (this.successmsg) {
    //             this.router.navigate(['/email-verification/user']);
    //           }
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });
    //   }else{
    //     this.userService.register(this.signupForm.value)
    //       .pipe(first())
    //       .subscribe(
    //         data => {
    //           this.successmsg = true;
    //           if (this.successmsg) {
    //             this.router.navigate(['/email-verification/merchant']);
    //           }
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });

    //   }
    //   }

    }


