import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficerZbFormDetailPageRoutingModule } from './officer-zb-form-detail-routing.module';

import { OfficerZbFormDetailPage } from './officer-zb-form-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficerZbFormDetailPageRoutingModule
  ],
  declarations: [OfficerZbFormDetailPage]
})
export class OfficerZbFormDetailPageModule {}
