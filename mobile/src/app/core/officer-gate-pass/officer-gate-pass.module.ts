import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficerGatePassPageRoutingModule } from './officer-gate-pass-routing.module';

import { OfficerGatePassPage } from './officer-gate-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficerGatePassPageRoutingModule
  ],
  declarations: [OfficerGatePassPage]
})
export class OfficerGatePassPageModule {}
