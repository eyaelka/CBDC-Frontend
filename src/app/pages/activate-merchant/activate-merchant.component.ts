import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { helpers } from 'chart.js';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import { ActivatedRoute } from '@angular/router';
import { Merchant } from './merchant.model';

@Component({
  selector: 'app-activate-merchant',
  templateUrl: './activate-merchant.component.html',
  styleUrls: ['./activate-merchant.component.scss']
})
export class ActivateMerchantComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private userService : GenericUserService) {

}


// bread crumb items
breadCrumbItems: Array<{}>;
value: number;

merchant: Merchant[] = new Array();



ngOnInit() {

this.value = 4;


/**
* fetches the data
*/
this._fetchData();
let helper = new JwtHelperService();
let token = this.activatedRoute.snapshot.params.token;
let decodedToken = helper.decodeToken(token);
let userToActivate:Merchant = decodedToken.merchant
console.log(userToActivate);
this.merchant.push(userToActivate);

}

validationFinale(){
let user:Merchant = this.merchant.pop();
this.userService.addUser("http://localhost:10054/merchant/create",user).subscribe(
res =>{
alert ("Validé");

}
)



}

/**
* Cart data fetch
*/
private _fetchData() {
this.merchant = this.merchant;
}


}
