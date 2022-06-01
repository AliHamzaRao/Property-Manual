import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPaths } from './auth-const';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponent } from './auth-main/login/login.component';
import { VerifyEmailComponent } from './auth-main/verify-email/verify-email.component';
import { EmailVerifiedComponent } from './auth-main/email-verified/email-verified.component';


export const routes: Routes = [
    {
      path: "",
      redirectTo: AuthenticationPaths.login,
      pathMatch: 'full'
    },
    {
      path: "",
      component:AuthMainComponent,
      children:[
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

