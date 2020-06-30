import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'cargo',
                children: [
                    {
                        path: 'zb-submission',
                        component: ZbSubmissionComponent
                    },
                    {
                        path: 'gate-application',
                        component: GateApplicationComponent
                    },
                    {
                        path: 'oga-approval',
                        component: OgaSubmissionComponent
                    },
                    {
                        path: 'release-number',
                        component: ReleaseNumberComponent
                    },
                    {
                        path: 'database',
                        component: DatabaseComponent
                    }
                ]
            },
            {
                path: 'people',
                children: [
                    {
                        path: 'e-permanent',
                        component: EPermanentComponent
                    },
                    {
                        path: 'e-visitor',
                        component: EVisitorComponent
                    },
                    {
                        path: 'e-booking',
                        component: EBookingComponent
                    },
                    {
                        path: 'e-complaint',
                        component: EComplaintComponent
                    },
                    {
                        path: 'e-billing',
                        component: EBillingComponent
                    }
                ]
            },
            {
                path: 'vehicle',
                children: [
                    {
                        path: 'gate-pass',
                        component: GatePassComponent
                    },
                    {
                        path: 'gate-control',
                        component: GateControlComponent
                    },
                    {
                        path: 'vehicle-registration',
                        component: VehicleRegistrationComponent
                    },
                    {
                        path: 'vehicle-tracking',
                        component: VehicleTrackingComponent
                    },
                    {
                        path: 'equipment-machinery',
                        component: EquipmentMachineryComponent
                    }
                ]
            }
        ]
    }
]