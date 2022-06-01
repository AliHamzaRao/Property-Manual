import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPaths } from './authn/auth-const';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./authn/authn.module').then(m => m.AuthnModule)
  },
{
    path: '**', redirectTo: ''
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
