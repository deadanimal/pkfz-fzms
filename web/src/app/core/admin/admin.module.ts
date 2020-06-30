import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { ZbSubmissionComponent } from './zb-submission/zb-submission.component';
import { GateApplicationComponent } from './gate-application/gate-application.component';
import { OgaSubmissionComponent } from './oga-submission/oga-submission.component';
import { ReleaseNumberComponent } from './release-number/release-number.component';
import { DatabaseComponent } from './database/database.component';
import { EPermanentComponent } from './e-permanent/e-permanent.component';
import { EVisitorComponent } from './e-visitor/e-visitor.component';
import { EBookingComponent } from './e-booking/e-booking.component';
import { EComplaintComponent } from './e-complaint/e-complaint.component';
import { EBillingComponent } from './e-billing/e-billing.component';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { GateControlComponent } from './gate-control/gate-control.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { VehicleTrackingComponent } from './vehicle-tracking/vehicle-tracking.component';
import { EquipmentMachineryComponent } from './equipment-machinery/equipment-machinery.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ZbSubmissionComponent,
    GateApplicationComponent,
    OgaSubmissionComponent,
    ReleaseNumberComponent,
    DatabaseComponent,
    EPermanentComponent,
    EVisitorComponent,
    EBookingComponent,
    EComplaintComponent,
    EBillingComponent,
    GatePassComponent,
    GateControlComponent,
    VehicleRegistrationComponent,
    VehicleTrackingComponent,
    EquipmentMachineryComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
