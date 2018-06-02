import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSortModule,
  MatDatepickerModule,
  MatMenuModule,
  MatRippleModule,
  MatTableModule
} from '@angular/material';
import {UserService} from './security/services/user.service';
import {AuthGuard} from './security/guards/auth-guard.service';
import {AdminAuthGuard} from './security/guards/admin-auth-guard.service';
import {AppRoutingModule} from './app-routing.module';
import {SecurityModule} from './security/security.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AssignmentComponent} from './assignment/assignment.component';
import {AppBootstrapModule} from './app-bootstrap.module';
import {AboutComponent} from './about/about.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {EmployeeListComponent} from './ui/form/employee/employee-list/employee-list.component';
import {EmployeeDetailComponent} from './ui/form/employee/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AssignmentComponent,
    AboutComponent,
    AssignmentReportComponent,
    MaterialElementComponent,
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    AppRoutingModule,
    MatStepperModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, BrowserAnimationsModule, FlexLayoutModule, AppBootstrapModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
