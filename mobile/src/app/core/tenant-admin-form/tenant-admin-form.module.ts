import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantAdminFormPageRoutingModule } from './tenant-admin-form-routing.module';

import { TenantAdminFormPage } from './tenant-admin-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantAdminFormPageRoutingModule
  ],
  declarations: [TenantAdminFormPage]
})
export class TenantAdminFormPageModule {}
