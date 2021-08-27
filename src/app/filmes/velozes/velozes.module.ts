import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelozesPageRoutingModule } from './velozes-routing.module';

import { VelozesPage } from './velozes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelozesPageRoutingModule
  ],
  declarations: [VelozesPage]
})
export class VelozesPageModule {}
