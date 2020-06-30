import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsGatePassPage } from './agents-gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: AgentsGatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsGatePassPageRoutingModule {}
