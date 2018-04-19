import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PregisProvider } from '../../providers/pregis/pregis';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string;
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public RegisApi:PregisProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Regis(){
        this.RegisApi.doRegister(this.email,this.password,this.username)
        .then((data:any) =>{
        //  alert(JSON.stringify(data));
        });
         this.navCtrl.pop();
       }
}
