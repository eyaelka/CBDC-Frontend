import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent implements OnInit {

  submitted = false;
  successmsg = false;
  error = '';




  constructor(private route: ActivatedRoute, private router: Router) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    document.body.classList.remove('auth-body-bg')

  }

  btnClick(){
    this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/confirm-mail']);
              }

  }

}
