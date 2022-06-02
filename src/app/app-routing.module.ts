
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPaths } from './authn/auth-const';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./authn/authn.module').then(m => m.AuthnModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch:'full'
  },
  // {
  //   path: '**', redirectTo: ''
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
