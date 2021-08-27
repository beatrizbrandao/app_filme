import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Velozes8Page } from './velozes8.page';

const routes: Routes = [
  {
    path: '',
    component: Velozes8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Velozes8PageRoutingModule {}
