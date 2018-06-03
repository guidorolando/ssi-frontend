import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AssignmentComponent} from './assignment/assignment.component';
import {AppBootstrapModule} from './app-bootstrap.module';
import {AboutComponent} from './about/about.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {EmployeeListComponent} from './ui/form/employee/employee-list/employee-list.component';
import {EmployeeDetailComponent} from './ui/form/employee/employee-detail/employee-detail.component';
import {ModelModule} from './models/model.module';
import { AccidentComponent } from './accident/accident.component';
import { OEstructureComponent } from './oestructure/oestructure.component';
import {AppRoutingModule} from './app-routing.module';
import { AssignmentService } from './security/services/assignment.service';
import { AssignmentReportService } from './security/services/assignment-report.service';
import {ServiceModule} from './services/service.module';
import {IncidentTypeListComponent} from './ui/form/Incident-type/incident-type-list/incident-type-list.component';
import {IncidentTypeDetailComponent} from './ui/form/Incident-type/incident-type-detail/incident-type-detail.component';
import { MaterialElementService } from './security/services/material-element.service';

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
    EmployeeListComponent,
    IncidentTypeListComponent,
    IncidentTypeDetailComponent,
    ReportComponent,
    HomeComponent,
    AccidentComponent,
    OEstructureComponent
  ],
  imports: [
    ReactiveFormsModule,
    ModelModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceModule.forRoot(),
   // SecurityModule,
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
    AdminAuthGuard,
    MaterialElementService,
    AssignmentService,
    AssignmentReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
