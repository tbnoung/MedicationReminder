import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-oflinelogout',
  templateUrl: 'oflinelogout.html',
})
export class OflinelogoutPage {

  name:any;
  email:any;
  tel:any;
  age:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public app: App) 
          {
            this.storage.get('OFFUserName').then((val) => {this.name = val});
            this.storage.get('OFFEmail').then((val) => {this.email = val});
            this.storage.get('OFFTel').then((val) => {this.tel = val});
            this.storage.get('OFFAge').then((val) => {this.age = val});
          }

  Logout()
  {
    let nav = this.app.getRootNav()
    this.storage.clear()
    this.storage.set('roota', 1);
    this.storage.set('OfflineFirstTime',false);
    nav.setRoot(LoginPage);
    
    // this.navCtrl.setRoot(LoginPage);
  }

}
