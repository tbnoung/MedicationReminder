import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OflineTabPage } from './ofline-tab';

@NgModule({
  declarations: [
    OflineTabPage,
  ],
  imports: [
    IonicPageModule.forChild(OflineTabPage),
  ],
})
export class OflineTabPageModule {}
