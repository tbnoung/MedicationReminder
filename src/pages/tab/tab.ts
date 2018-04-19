import { LogoutPage } from './../logout/logout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ScanPage } from '../scan/scan';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
	tab1: any;
	tab2: any;
  tab3: any;
  // tab00:any;
  // tab11:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.tab1 = ScanPage;
    this.tab2 = HomePage;
    this.tab3 = LogoutPage;
    this.storage.set('roota', 2);
    // this.tab00 = ScanPage;
    // this.tab11 = ScanPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}

