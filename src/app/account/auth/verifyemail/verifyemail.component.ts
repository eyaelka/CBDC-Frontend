import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent implements OnInit {

  submitted = false;
  successmsg = false;
  error = '';
  role;


  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    document.body.classList.remove('auth-body-bg')
    this.role = this.route.snapshot.params.role;
    this.authService.sendEmail("http://localhost:10054/merchant/sendcodeverification","elkamel.eyaa@gmail.com")

  }

  btnClick(){
    this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/confirm-mail/'+this.role]);
              }

  }

}
