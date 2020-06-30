import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentsGatePassPageRoutingModule } from './agents-gate-pass-routing.module';

import { AgentsGatePassPage } from './agents-gate-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentsGatePassPageRoutingModule
  ],
  declarations: [AgentsGatePassPage]
})
export class AgentsGatePassPageModule {}
