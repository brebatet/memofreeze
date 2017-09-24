import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreezeDetailPage } from './freeze-detail';

@NgModule({
  declarations: [
    FreezeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FreezeDetailPage),
  ],
})
export class FreezeDetailPageModule {}
