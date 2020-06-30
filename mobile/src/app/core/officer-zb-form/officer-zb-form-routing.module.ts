import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerZbFormPage } from './officer-zb-form.page';

const routes: Routes = [
  {
    path: '',
    component: OfficerZbFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerZbFormPageRoutingModule {}
