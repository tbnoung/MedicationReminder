import { OfsetbarPage } from './../ofsetbar/ofsetbar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OflineTabPage } from './../ofline-tab/ofline-tab';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ofsettime',
  templateUrl: 'ofsettime.html',
})
export class OfsettimePage {
  TimeSetH1:number;
  TimeSetM1:number;
  TimeSetH2:number;
  TimeSetM2:number;
  TimeSetH3:number;
  TimeSetM3:number;
  TimeSetH4:number;
  TimeSetM4:number;
  TimeSetH5:number;
  TimeSetM5:number;
  TimeSetH6:number;
  TimeSetM6:number;
  TimeSetH7:number;
  TimeSetM7:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage)
    {

    }

  GoOflineTabs()
  {
    this.storage.set('OfflineTimeBBH',this.TimeSetH1);
    this.storage.set('OfflineTimeBBM',this.TimeSetM1);

    this.storage.set('OfflineTimeABH',this.TimeSetH2);
    this.storage.set('OfflineTimeABM',this.TimeSetM2);

    this.storage.set('OfflineTimeBLH',this.TimeSetH3);
    this.storage.set('OfflineTimeBLM',this.TimeSetM3);

    this.storage.set('OfflineTimeALH',this.TimeSetH4);
    this.storage.set('OfflineTimeALM',this.TimeSetM4);

    this.storage.set('OfflineTimeBDH',this.TimeSetH5);
    this.storage.set('OfflineTimeBDM',this.TimeSetM5);

    this.storage.set('OfflineTimeADH',this.TimeSetH6);
    this.storage.set('OfflineTimeADM',this.TimeSetM6);

    this.storage.set('OfflineTimeBNH',this.TimeSetH7);
    this.storage.set('OfflineTimeBNM',this.TimeSetM7);
    
    this.navCtrl.setRoot(OflineTabPage);
  }
}
