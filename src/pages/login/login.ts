import { OfflinePage } from './../offline/offline';
import { TabPage } from './../tab/tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PloginProvider } from '../../providers/plogin/plogin';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
rootP:any=LoginPage;
username:any;
password:any;
ModeState:boolean=false;

test:any;
userData:any;
DomainName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginCtrl: PloginProvider,private storage: Storage,public alertCtrl: AlertController) 
    {
      
    }

  goTabs()
  {
    this.loginCtrl.dologin(this.username,this.password)
    .then((data:any) =>{

        this.storage.set('ID', data._id);

        alert(JSON.stringify(data._id));
        this.navCtrl.setRoot(TabPage);
      
      
    });
   }
   goRegi()
   {
     this.navCtrl.push(RegisterPage);
   }
   offline()
   {
      this.navCtrl.setRoot(OfflinePage);
   }

  //  goFB()
  //  {
  //    this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse) =>{
  //      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).as(picture_large)',[]).then(profile => {
  //        this.userData = {
  //           email:profile['email'],
  //           first_name:profile['first_name'],
  //           picture: profile['picture_large']['data']['url'],
  //           username:profile['name']
  //        };
  //      });
  //    });
  //  }
  
  // URL()
  // {
  //   this.storage.set('Domain',this.DomainName);
  // }
  
}






