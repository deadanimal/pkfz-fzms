import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantZbFormPage } from './tenant-zb-form.page';

const routes: Routes = [
  {
    path: '',
    component: TenantZbFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantZbFormPageRoutingModule {}
