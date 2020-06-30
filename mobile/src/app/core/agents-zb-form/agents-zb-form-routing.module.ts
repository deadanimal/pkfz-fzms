import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsZbFormPage } from './agents-zb-form.page';

const routes: Routes = [
  {
    path: '',
    component: AgentsZbFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsZbFormPageRoutingModule {}
