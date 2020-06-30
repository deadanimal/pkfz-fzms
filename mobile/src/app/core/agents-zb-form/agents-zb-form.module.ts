import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentsZbFormPageRoutingModule } from './agents-zb-form-routing.module';

import { AgentsZbFormPage } from './agents-zb-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentsZbFormPageRoutingModule
  ],
  declarations: [AgentsZbFormPage]
})
export class AgentsZbFormPageModule {}
