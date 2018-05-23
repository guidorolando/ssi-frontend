import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/security/security.module#SecurityModule'
  },
  {
    path: '',
    loadChildren: 'app/security/security.module#SecurityModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false , useHash: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
