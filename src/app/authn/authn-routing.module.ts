import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPaths } from './auth-const';
import { AuthComponent } from './auth-main/auth.component';
import { EmailVerifiedComponent } from './auth-main/email-verified/email-verified.component';
import { LoginComponent } from './auth-main/login/login.component';
import { VerifyEmailComponent } from './auth-main/verify-email/verify-email.component';
import { MainComponent } from './auth-main/main/main.component';


export const routes: Routes = [
    // {
    //   path: "",
    //   redirectTo: AuthenticationPaths.login,
    //   pathMatch: 'full'
    //},
    // {
    //   path: "**",
    //   redirectTo: '',
    //   pathMatch: 'full'
    // },
    {
      path: "",
      component:AuthComponent,
      children:[
        {
          path:'',
          component:MainComponent
        },
        {
          path:AuthenticationPaths.login,
          component:LoginComponent
        },
        {
          path:AuthenticationPaths.verifyemail,
          component:VerifyEmailComponent
        },
        {
          path:AuthenticationPaths.verifiedemail,
          component:EmailVerifiedComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class AuthenticationRoutingModule { }

