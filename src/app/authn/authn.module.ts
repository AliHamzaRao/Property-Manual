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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SignUpComponent } from './auth-main/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth-main/verify-email/verify-email.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AuthComponent,
    MainComponent,
    LoginComponent,
    SignUpComponent,
    VerifyEmailComponent
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
    NzIconModule,
    NzLayoutModule,
    NzDividerModule,
    NzButtonModule
  ]
})
export class AuthnModule { }
