import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'aaaa List'}
  },
  {
    path: 'detail',
    component: ContactDetailComponent,
    data: { title: 'Contact Detail'}
  },
  {
    path: '',
    component: ContactDetailComponent
  },
  {
    path: '**',
    component: ContactDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent, ContactComponent, ContactDetailComponent]
})
export class AppModule { }
