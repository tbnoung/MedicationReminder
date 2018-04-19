import { OflinecheckPage } from './../oflinecheck/oflinecheck';
import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/Subscription";

import { BackgroundMode } from '@ionic-native/background-mode';

@IonicPage()
@Component({
  selector: 'page-offull',
  templateUrl: 'offull.html',
})
export class OffullPage {
 
  HH:number;
  MM:number;

  momoh:any;
  timecount:any;

  TimeBBH:any;
  TimeBBM:any;

  TimeABH:any;
  TimeABM:any;

  TimeBLH:any;
  TimeBLM:any;

  TimeALH:any;
  TimeALM:any;

  TimeBDH:any;
  TimeBDM:any;

  TimeADH:any;
  TimeADM:any;

  TimeBNH:any;
  TimeBNM:any;

  stateja:any;

  FirstStateTime:number;
  FirstStateTimeUse:boolean;

  next:boolean=false;

  constructor(private plt: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    private storage: Storage,
    private backgroundMode: BackgroundMode
  ) 
  {
    //---------------------------------backgroundMode-------------------------
    this.backgroundMode.enable();
     //---------------------------------backgroundMode-------------------------
    this.plt.ready().then(() => {
      this.localNotifications.on('click',(noti, state) => {
        // alert(state);
        // this.next = true;
        this.navCtrl.push(OflinecheckPage);
          });
          });
    var reg = this;

    this.storage.get('OfflineFirstTime').then((val) => {this.FirstStateTimeUse = val });

      this.storage.get('OfflineTimeBBH').then((val) => {this.TimeBBH = val });
      this.storage.get('OfflineTimeBBM').then((val) => {this.TimeBBM = val });

      this.storage.get('OfflineTimeABH').then((val) => {this.TimeABH = val });
      this.storage.get('OfflineTimeABM').then((val) => {this.TimeABM = val });

      this.storage.get('OfflineTimeBLH').then((val) => {this.TimeBLH = val });
      this.storage.get('OfflineTimeBLM').then((val) => {this.TimeBLM = val });

      this.storage.get('OfflineTimeALH').then((val) => {this.TimeALH = val });
      this.storage.get('OfflineTimeALM').then((val) => {this.TimeALM = val });
 
      this.storage.get('OfflineTimeBDH').then((val) => {this.TimeBDH = val });
      this.storage.get('OfflineTimeBDM').then((val) => {this.TimeBDM = val });
 
      this.storage.get('OfflineTimeADH').then((val) => {this.TimeADH = val });
      this.storage.get('OfflineTimeADM').then((val) => {this.TimeADM = val });

      this.storage.get('OfflineTimeBNH').then((val) => {this.TimeBNH = val });
      this.storage.get('OfflineTimeBNM').then((val) => {this.TimeBNM = val});

      

      

      Observable.interval(1000).subscribe(()=>
		{
      
      reg.momoh = new Date();
      reg.timecount = reg.momoh.getHours()+":"+reg.momoh.getMinutes()+":"+reg.momoh.getSeconds();

      this.storage.get('OfflineState').then((val) => {this.FirstStateTime = val});

      if(this.FirstStateTimeUse == true)
      {
        if(this.TimeBBH != '' && (this.TimeBBH>this.momoh.getHours() || (this.TimeBBH == this.momoh.getHours() && this.TimeBBM != '' && this.TimeBBM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 1;
        this.storage.set('OfflineState',1);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeABH != ''&& (this.TimeABH>this.momoh.getHours() || (this.TimeABH == this.momoh.getHours() && this.TimeABM != '' && this.TimeABM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 2;
        this.storage.set('OfflineState',2);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeBLH != ''&& (this.TimeBLH>this.momoh.getHours() || (this.TimeBLH == this.momoh.getHours() && this.TimeBLM != '' && this.TimeBLM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 3;
        this.storage.set('OfflineState',3);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeALH != ''&& (this.TimeALH>this.momoh.getHours() || (this.TimeALH == this.momoh.getHours() && this.TimeALM != '' && this.TimeALM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 4;
        this.storage.set('OfflineState',4);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeBDH != ''&& (this.TimeBDH>this.momoh.getHours() || (this.TimeBDH == this.momoh.getHours() && this.TimeBDM != '' && this.TimeBDM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 5;
        this.storage.set('OfflineState',5);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeADH != ''&& (this.TimeADH>this.momoh.getHours() || (this.TimeADH == this.momoh.getHours() && this.TimeADM != '' && this.TimeADM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 6;
        this.storage.set('OfflineState',6);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else if(this.TimeBNH != ''&& (this.TimeBNH>this.momoh.getHours() || (this.TimeBNH == this.momoh.getHours() && this.TimeBNM != '' && this.TimeBNM > this.momoh.getMinutes())))
      {
        this.FirstStateTime = 7;
        this.storage.set('OfflineState',7);
        this.storage.set('OfflineFirstTime',false);
        this.FirstStateTimeUse = false;
      }
      else
      {
        this.FirstStateTime = 8;
      }
      
      }
//--------------------------------------------------------
      if(this.FirstStateTime == 1)
      {
        this.HH = this.TimeBBH;
        this.MM = this.TimeBBM;
      }
      else if(this.FirstStateTime == 2)
      {
        this.HH = this.TimeABH;
        this.MM = this.TimeABM;
      }
      else if(this.FirstStateTime == 3)
      {
        this.HH = this.TimeBLH;
        this.MM = this.TimeBLM;
      }
      else if(this.FirstStateTime == 4)
      {
        this.HH = this.TimeALH;
        this.MM = this.TimeALM;
      }
      else if(this.FirstStateTime == 5)
      {
        this.HH = this.TimeBDH;
        this.MM = this.TimeBDM;
      }
      else if(this.FirstStateTime == 6)
      {
        this.HH = this.TimeADH;
        this.MM = this.TimeADM;
      }
      else if(this.FirstStateTime == 7)
      {
        this.HH = this.TimeBNH;
        this.MM = this.TimeBNM;
      }
      
        this.localNotifications.schedule
		    (
			  {
          id: 1,
          title: 'Medication Reminder',
          text: 'กรุณารับประทานยา',
				  data: { mydata:'1' },
					at: new  Date(new Date().setHours(this.HH,this.MM)) 
			  }
        );

      });
    }
    tester()
    {
      this.navCtrl.push(OflinecheckPage);
    }
  }

