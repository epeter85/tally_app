import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmokePage } from './smoke';

@NgModule({
  declarations: [
    SmokePage,
  ],
  imports: [
    IonicPageModule.forChild(SmokePage),
  ],
})
export class SmokePageModule {}
