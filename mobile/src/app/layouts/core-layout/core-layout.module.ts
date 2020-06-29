import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoreLayoutPageRoutingModule } from './core-layout-routing.module';

import { CoreLayoutPage } from './core-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreLayoutPageRoutingModule
  ],
  declarations: [CoreLayoutPage]
})
export class CoreLayoutPageModule {}
