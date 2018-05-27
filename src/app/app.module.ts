import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatTabsModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatRadioModule, MatToolbarModule, MatTooltipModule, MatSnackBarModule, MatSortModule, MatDatepickerModule, MatMenuModule, MatRippleModule, MatTableModule } from '@angular/material';
import { UserService } from './security/services/user.service';
import { AuthenticationService } from './security/services/authentication.service';
import { AuthGuard } from './security/guards/auth-guard.service';
import { AdminAuthGuard } from './security/guards/admin-auth-guard.service';
import { TOKEN_NAME } from './security/services/auth.constants';
import { AppDataService } from './security/services/app-data.service';
import { Http } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    AppRoutingModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, BrowserAnimationsModule,FlexLayoutModule 
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminAuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent, ContactComponent, ContactDetailComponent]
})
export class AppModule { }
