import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantGatePassPage } from './tenant-gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: TenantGatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantGatePassPageRoutingModule {}
