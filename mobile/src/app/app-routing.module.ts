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
