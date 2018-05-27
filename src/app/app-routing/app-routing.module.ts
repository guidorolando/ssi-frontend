import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';


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
