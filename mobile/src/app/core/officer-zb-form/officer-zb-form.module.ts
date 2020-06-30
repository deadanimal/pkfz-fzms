import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficerZbFormPageRoutingModule } from './officer-zb-form-routing.module';

import { OfficerZbFormPage } from './officer-zb-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficerZbFormPageRoutingModule
  ],
  declarations: [OfficerZbFormPage]
})
export class OfficerZbFormPageModule {}
