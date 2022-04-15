import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { ConfirmmailComponent } from './confirmmail/confirmmail.component';
import { KycComponent } from './kyc/kyc.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'email-verification',
      component: VerifyemailComponent
    },
    {
      path: 'confirmmail',
      component: ConfirmmailComponent
    },
    {
      path: 'kyc',
      component: KycComponent
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
