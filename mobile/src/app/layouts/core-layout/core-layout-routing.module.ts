import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutPage } from './core-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'tenant',
        children: [
          {
            path: 'zb-form',
            loadChildren: () => 
              import('../../core/tenant-zb-form/tenant-zb-form.module').then(m => m.TenantZbFormPageModule)
          },
          {
            path: 'gate-pass',
            loadChildren: () => 
              import('../../core/tenant-gate-pass/tenant-gate-pass.module').then(m => m.TenantGatePassPageModule)
          },
          {
            path: 'admin-form',
            loadChildren: () => 
              import('../../core/tenant-admin-form/tenant-admin-form.module').then(m => m.TenantAdminFormPageModule)
          }
        ]
      },
      {
        path: 'agent',
        children: [
          {
            path: 'zb-form',
            loadChildren: () => 
              import('../../core/agents-zb-form/agents-zb-form.module').then(m => m.AgentsZbFormPageModule)
          },
          {
            path: 'gate-pass',
            loadChildren: () => 
              import('../../core/agents-gate-pass/agents-gate-pass.module').then(m => m.AgentsGatePassPageModule)
          },
          {
            path: 'admin-form',
            loadChildren: () => 
              import('../../core/agents-admin-form/agents-admin-form.module').then(m => m.AgentsAdminFormPageModule)
          }
        ]
      },
      {
        path: 'officer',
        children: [
          {
            path: 'zb-form',
            loadChildren: () => 
              import('../../core/officer-zb-form/officer-zb-form.module').then(m => m.OfficerZbFormPageModule)
          },
          {
            path: 'gate-pass',
            loadChildren: () => 
              import('../../core/officer-gate-pass/officer-gate-pass.module').then(m => m.OfficerGatePassPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/core/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreLayoutPageRoutingModule {}
