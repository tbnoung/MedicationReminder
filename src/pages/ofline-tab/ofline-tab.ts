import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OflinelogoutPage } from './../oflinelogout/oflinelogout';
import { OflinescanPage } from './../oflinescan/oflinescan';
import { OffullPage } from './../offull/offull';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ofline-tab',
  templateUrl: 'ofline-tab.html',
})
export class OflineTabPage {
  tab1:any;
  tab2:any;
  tab3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) 
  {
    this.tab1 = OflinescanPage;
    this.tab2 = OffullPage;
    this.tab3 = OflinelogoutPage;
    this.storage.set('roota', 3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OflineTabPage');
  }

}
