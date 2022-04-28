import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2Component } from './login2/login2.component';
import { LoginComponent } from './login/login.component';

import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { ConfirmmailComponent } from './confirmmail/confirmmail.component';
import { KycComponent } from './kyc/kyc.component';
import { MerchantformComponent } from './merchantform/merchantform.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
    {
      path: 'start-page',
      component: StartPageComponent
    },
    {
      path: 'email-verification',
      component: VerifyemailComponent
    },
    {
      path: 'confirm-mail',
      component: ConfirmmailComponent
    },
    {
      path: 'kyc',
      component: KycComponent
    },
    {
      path: 'merchant-form',
      component: MerchantformComponent
    },
    {
        path: 'signup',
        component: Register2Component
    },
    {
        path: 'reset-password',
        component: PasswordresetComponent
    },
    {
        path: 'recoverpwd-2',
        component: Recoverpwd2Component
    },
    {
        path: 'login-2',
        component: Login2Component
    },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
