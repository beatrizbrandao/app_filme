import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Barraca2Page } from './barraca2.page';

const routes: Routes = [
  {
    path: '',
    component: Barraca2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Barraca2PageRoutingModule {}
