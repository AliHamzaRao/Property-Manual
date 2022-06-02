import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth-main/auth.component';
import { AuthenticationRoutingModule } from './authn-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from "ng-zorro-antd/grid"
import { NzTypographyModule } from "ng-zorro-antd/typography"
import { NzImageModule } from "ng-zorro-antd/image"
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzFormModule } from "ng-zorro-antd/form"
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './auth-main/main/main.component';
import { LoginComponent } from './auth-main/login/login.component';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    AuthComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    RouterModule,
    NzTypographyModule,
    NzTransButtonModule,
    NzImageModule,
    NzFormModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    NzInputModule,
  ]
})
export class AuthnModule { }
