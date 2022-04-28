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




  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    document.body.classList.remove('auth-body-bg')
    this.authService.sendEmail("http://localhost:10053/enduser/sendcodeverification","elkamel.eyaa@gmail.com")

  }

  btnClick(){
    this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/confirm-mail']);
              }

  }

}
