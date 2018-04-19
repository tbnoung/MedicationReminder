import { EditPage } from './../edit/edit';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {
username:any;
email:any;
tel:any;
age:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public app: App) {
    this.storage.get('usernamedb').then((val) => {this.username = val});
    this.storage.get('emaildb').then((val) => {this.email= val});
    this.storage.get('teldb').then((val) => {this.tel = val});
    this.storage.get('agedb').then((val) => {this.age = val});



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }
  Logout()
  {
    let nav = this.app.getRootNav()
    this.storage.clear()
    this.storage.set('roota', 1);
    nav.setRoot(LoginPage);
    // this.navCtrl.setRoot(LoginPage);
  }
  edit(){
    this.navCtrl.push(EditPage);
  }
}
