import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantAdminFormPage } from './tenant-admin-form.page';

const routes: Routes = [
  {
    path: '',
    component: TenantAdminFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantAdminFormPageRoutingModule {}
