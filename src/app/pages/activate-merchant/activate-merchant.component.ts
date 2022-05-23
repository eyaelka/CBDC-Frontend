import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { helpers } from 'chart.js';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import { ActivatedRoute } from '@angular/router';
import { MerchantAccountInfo } from './merchant.model';
import { MyRouterLink } from '../../core/models/router-links';

@Component({
  selector: 'app-activate-merchant',
  templateUrl: './activate-merchant.component.html',
  styleUrls: ['./activate-merchant.component.scss']
})
export class ActivateMerchantComponent implements OnInit {
  error = '';
  success: true;
  myRouterLink: MyRouterLink = new MyRouterLink();
  constructor(private activatedRoute: ActivatedRoute,
    private userService : GenericUserService) {}
  // bread crumb items
  breadCrumbItems: Array<{}>;
  value: number;
  endUser: MerchantAccountInfo[] = new Array();

  ngOnInit() {
  this.value = 4;
/**
* fetches the data
*/
  this._fetchData();
  let helper = new JwtHelperService();
  let token = this.activatedRoute.snapshot.params.token;
  let decodedToken = helper.decodeToken(token);
  console.log("dans acitvate",decodedToken);
  let userToActivate:MerchantAccountInfo = decodedToken.endUser;
  console.log("user dans  let regulatoractivate",userToActivate);
  this.endUser.push(userToActivate);

}

  validationFinale(){
  let user:MerchantAccountInfo = this.endUser.pop();
  user.suspend = false;
  console.log("heeere",user)
  this.userService.addUser(this.myRouterLink.linkCreateMerchant,user).subscribe(
    res =>{
      if (res){
        alert ("Validé");
      }
      error => {
        this.error = error ? error : '';
      }
    });
  }

/**
* data fetch
*/
  private _fetchData() {
    this.endUser = this.endUser;
    }
  }
