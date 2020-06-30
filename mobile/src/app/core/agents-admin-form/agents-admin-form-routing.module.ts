import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsAdminFormPage } from './agents-admin-form.page';

const routes: Routes = [
  {
    path: '',
    component: AgentsAdminFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsAdminFormPageRoutingModule {}
