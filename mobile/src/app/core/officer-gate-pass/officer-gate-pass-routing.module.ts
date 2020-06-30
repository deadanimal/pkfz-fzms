import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerGatePassPage } from './officer-gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: OfficerGatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerGatePassPageRoutingModule {}
