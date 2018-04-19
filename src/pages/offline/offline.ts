import { OfsetbarPage } from './../ofsetbar/ofsetbar';
import { OfsettimePage } from './../ofsettime/ofsettime';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage 
{
  username:string="";
  Email:string;
  Tel:string;
  Age:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) 
  {

    this.storage.set('OfflineBarcode',"");
    
    this.storage.set('OfflineName',"");

    //============================================
    this.storage.set('OfflinePamac1',"");
    this.storage.set('OfflinePamac2',"");
    this.storage.set('OfflinePamac3',"");
    this.storage.set('OfflinePamac4',"");
    this.storage.set('OfflinePamac5',"");
    this.storage.set('OfflinePamac6',"");
    this.storage.set('OfflinePamac7',"");

    this.storage.set('OfflineTimeBBH',"");
    this.storage.set('OfflineTimeBBM',"");
    this.storage.set('OfflineTimeABH',"");
    this.storage.set('OfflineTimeABM',"");

    this.storage.set('OfflineTimeBLH',"");
    this.storage.set('OfflineTimeBLM',"");
    this.storage.set('OfflineTimeALH',"");
    this.storage.set('OfflineTimeALM',"");

    this.storage.set('OfflineTimeBDH',"");
    this.storage.set('OfflineTimeBDM',"");
    this.storage.set('OfflineTimeADH',"");
    this.storage.set('OfflineTimeADM',"");

    this.storage.set('OfflineTimeBNH',"");
    this.storage.set('OfflineTimeBNM',"");

    this.storage.set('OfflineFirstTime',true);
  }

  goSettime()
  {
    if(this.username != "")
    {
      this.storage.set('OFFUserName',this.username);
      this.storage.set('OFFEmail',this.Email);
      this.storage.set('OFFTel',this.Tel);
      this.storage.set('OFFAge',this.Age);
      this.navCtrl.setRoot(OfsetbarPage);
    }
   else
   {
    alert("กรุณากรอกชื่อ");
   }
  }
}
