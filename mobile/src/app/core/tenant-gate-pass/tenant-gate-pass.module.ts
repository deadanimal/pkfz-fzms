import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantGatePassPageRoutingModule } from './tenant-gate-pass-routing.module';

import { TenantGatePassPage } from './tenant-gate-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantGatePassPageRoutingModule
  ],
  declarations: [TenantGatePassPage]
})
export class TenantGatePassPageModule {}
