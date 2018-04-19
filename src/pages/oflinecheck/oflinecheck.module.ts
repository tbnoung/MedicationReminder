import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OflinecheckPage } from './oflinecheck';

@NgModule({
  declarations: [
    OflinecheckPage,
  ],
  imports: [
    IonicPageModule.forChild(OflinecheckPage),
  ],
})
export class OflinecheckPageModule {}
