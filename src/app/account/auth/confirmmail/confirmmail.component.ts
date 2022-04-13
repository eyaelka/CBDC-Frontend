import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-confirmmail',
  templateUrl: './confirmmail.component.html',
  styleUrls: ['./confirmmail.component.scss']
})
export class ConfirmmailComponent implements OnInit {
  submitted = false;
  successmsg = false;
  error = '';

  constructor(private route: ActivatedRoute, private router: Router) { }
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '80px',
      'height': '50px'
    }
  };
  ngOnInit(): void {
    document.body.classList.remove('auth-body-bg')
  }
 // set the currenr year
 year: number = new Date().getFullYear();

 btnClick(){
  this.successmsg = true;
            if (this.successmsg) {
              this.router.navigate(['/kyc']);
            }

}


}
