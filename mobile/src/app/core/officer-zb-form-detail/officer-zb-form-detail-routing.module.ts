import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerZbFormDetailPage } from './officer-zb-form-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OfficerZbFormDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerZbFormDetailPageRoutingModule {}
