import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABarracaDoBeijoPageRoutingModule } from './a-barraca-do-beijo-routing.module';

import { ABarracaDoBeijoPage } from './a-barraca-do-beijo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABarracaDoBeijoPageRoutingModule
  ],
  declarations: [ABarracaDoBeijoPage]
})
export class ABarracaDoBeijoPageModule {}
