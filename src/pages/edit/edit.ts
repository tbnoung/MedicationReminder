import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsernameProvider } from '../../providers/username/username';
import { EmailProvider } from '../../providers/email/email';
import { TelProvider } from '../../providers/tel/tel';
import { AgeProvider } from '../../providers/age/age';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
username_1: any;
email_1:any;
tel_1:any;
age_1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user : UsernameProvider,public email : EmailProvider,public tel : TelProvider,public age : AgeProvider) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
edit(){
  this.user.dologin(this.username_1)
  .then((data:any) =>
  {
  });


this.email.dologin(this.email_1)
.then((data:any) =>
{
});


this.tel.dologin(this.tel_1)
.then((data:any) =>
{
});


this.age.dologin(this.age_1)
.then((data:any) =>
{
});
  this.navCtrl.pop();
}
}
