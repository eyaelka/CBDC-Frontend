import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { helpers } from 'chart.js';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import { EndUSer } from './enduser.model';


@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private userService : GenericUserService) {

   }


  // bread crumb items
  breadCrumbItems: Array<{}>;
  value: number;

  endUser: EndUSer[] = new Array();



  ngOnInit() {

    this.value = 4;


    /**
     * fetches the data
     */
    this._fetchData();
    let helper = new JwtHelperService();
    let token = this.activatedRoute.snapshot.params.token;
    let decodedToken = helper.decodeToken(token);
    let userToActivate:EndUSer = decodedToken.endUser
    console.log(userToActivate);
    this.endUser.push(userToActivate);

  }

  validationFinale(){
    let user:EndUSer = this.endUser.pop();
    this.userService.addUser("http://localhost:10053/enduser/save",user).subscribe(
      res =>{
        alert ("Validé");

      }
    )



  }

  /**
   * Cart data fetch
   */
  private _fetchData() {
    this.endUser = this.endUser;
  }

}
