import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkalarmPage } from './workalarm';

@NgModule({
  declarations: [
    WorkalarmPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkalarmPage),
  ],
})
export class WorkalarmPageModule {}
