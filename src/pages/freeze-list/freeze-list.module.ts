import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreezeListPage } from './freeze-list';

@NgModule({
  declarations: [
    FreezeListPage,
  ],
  imports: [
    IonicPageModule.forChild(FreezeListPage),
  ],
})
export class FreezeListPageModule {}
