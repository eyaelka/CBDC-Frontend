import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from 'src/app/core/services/generic-user.service';



@Component({
  selector: 'app-confirmmail',
  templateUrl: './confirmmail.component.html',
  styleUrls: ['./confirmmail.component.scss']
})
export class ConfirmmailComponent implements OnInit {
  submitted = false;
  successmsg = false;
  error = '';
  role;
  email;
  code : number;

  constructor(private route: ActivatedRoute, private router: Router, private userService: GenericUserService) {

   }
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
    this.role = this.route.snapshot.params.role;
    console.log(this.role);
    let email = 'eya.elkamel@etudiant-fst.utm.tn'
    if ( this.role == 'user'){
      this.userService.sendEmail('http://localhost:10053/enduser/sendcodeverification',email).subscribe(
      res =>{
        this.code = res})
      }else{
        this.userService.sendEmail('http://localhost:10054/merchant/sendcodeverification',email).subscribe(
          res =>{
            this.code = res})
      }





    document.body.classList.remove('auth-body-bg');

  }
 // set the currenr year
 year: number = new Date().getFullYear();

 btnClick(){
   let digit = this.code.toString()
   if(digit == this.otp){
    if (this.role == 'user'){
      this.router.navigate(['/kyc']);
    }
    if(this.role == 'merchant'){
      this.router.navigate(['/merchant-form'])
    }
   }else{
     alert("Vérifier votre code");

   }

 }

 otp:string;
  onOtpChange(event){
    this.otp = event;
    console.log(this.otp);

  }



}



