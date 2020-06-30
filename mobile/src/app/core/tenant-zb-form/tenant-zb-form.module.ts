import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantZbFormPageRoutingModule } from './tenant-zb-form-routing.module';

import { TenantZbFormPage } from './tenant-zb-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantZbFormPageRoutingModule
  ],
  declarations: [TenantZbFormPage]
})
export class TenantZbFormPageModule {}
