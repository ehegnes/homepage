import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySetupComponent } from './my-setup.component';

const routes: Routes = [
  {
    path: '',
    component: MySetupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySetupRoutingModule { }
