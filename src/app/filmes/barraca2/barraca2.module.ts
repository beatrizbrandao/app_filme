import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Barraca2PageRoutingModule } from './barraca2-routing.module';

import { Barraca2Page } from './barraca2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Barraca2PageRoutingModule
  ],
  declarations: [Barraca2Page]
})
export class Barraca2PageModule {}
