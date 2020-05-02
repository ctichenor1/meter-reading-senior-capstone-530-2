import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterreadingsPage } from './meterreadings.page';

const routes: Routes = [
  {
    path: '',
    component: MeterreadingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeterreadingsPageRoutingModule {}
