import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationPaths } from './auth-const';


export const routes: Routes = [
    
      { path: AuthenticationPaths.login, 
        component: LoginComponent 
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
})
export class AuthenticationRoutingModule { }

