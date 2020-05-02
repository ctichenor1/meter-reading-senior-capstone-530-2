import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeterreadingsPageRoutingModule } from './meterreadings-routing.module';

import { MeterreadingsPage } from './meterreadings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeterreadingsPageRoutingModule
  ],
  declarations: [MeterreadingsPage]
})
export class MeterreadingsPageModule {}
