import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentsAdminFormPageRoutingModule } from './agents-admin-form-routing.module';

import { AgentsAdminFormPage } from './agents-admin-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentsAdminFormPageRoutingModule
  ],
  declarations: [AgentsAdminFormPage]
})
export class AgentsAdminFormPageModule {}
