import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'walkthrough',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then( m => m.AuthLayoutPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./layouts/core-layout/core-layout.module').then( m => m.CoreLayoutPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'tenant-zb-form',
    loadChildren: () => import('./core/tenant-zb-form/tenant-zb-form.module').then( m => m.TenantZbFormPageModule)
  },
  {
    path: 'tenant-gate-pass',
    loadChildren: () => import('./core/tenant-gate-pass/tenant-gate-pass.module').then( m => m.TenantGatePassPageModule)
  },
  {
    path: 'tenant-admin-form',
    loadChildren: () => import('./core/tenant-admin-form/tenant-admin-form.module').then( m => m.TenantAdminFormPageModule)
  },
  {
    path: 'agents-zb-form',
    loadChildren: () => import('./core/agents-zb-form/agents-zb-form.module').then( m => m.AgentsZbFormPageModule)
  },
  {
    path: 'agents-gate-pass',
    loadChildren: () => import('./core/agents-gate-pass/agents-gate-pass.module').then( m => m.AgentsGatePassPageModule)
  },
  {
    path: 'officer-gate-pass',
    loadChildren: () => import('./core/officer-gate-pass/officer-gate-pass.module').then( m => m.OfficerGatePassPageModule)
  },
  {
    path: 'officer-zb-form',
    loadChildren: () => import('./core/officer-zb-form/officer-zb-form.module').then( m => m.OfficerZbFormPageModule)
  },
  {
    path: 'agents-admin-form',
    loadChildren: () => import('./core/agents-admin-form/agents-admin-form.module').then( m => m.AgentsAdminFormPageModule)
  },
  {
    path: 'officer-zb-form-detail',
    loadChildren: () => import('./core/officer-zb-form-detail/officer-zb-form-detail.module').then( m => m.OfficerZbFormDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
