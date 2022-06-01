import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthenticationRoutingModule } from './authn-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from "ng-zorro-antd/grid"
import { NzTypographyModule } from "ng-zorro-antd/typography"
import { NzImageModule } from "ng-zorro-antd/image"
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';


@NgModule({
  declarations: [
    AuthMainComponent,

  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    RouterModule,
    NzTypographyModule,
    NzTransButtonModule,
    NzImageModule,
    AuthenticationRoutingModule
  ]
})
export class AuthnModule { }
