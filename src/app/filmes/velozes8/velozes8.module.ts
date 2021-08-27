import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Velozes8PageRoutingModule } from './velozes8-routing.module';

import { Velozes8Page } from './velozes8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Velozes8PageRoutingModule
  ],
  declarations: [Velozes8Page]
})
export class Velozes8PageModule {}
