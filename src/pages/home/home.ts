import { Component } from '@angular/core';
import { NavController, Platform , LoadingController  } from 'ionic-angular';
import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/Subscription";
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { WorkalarmPage } from '../workalarm/workalarm';

import { UseUpdateProvider } from '../../providers/use-update/use-update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	checkstatefirsttime:number = 1;
	momoh:any;
	timecount:any;

	BBH:number;
	BBM:number;
	ABH:number;
	ABM:number;

	BLH:number;
	BLM:number;
	ALH:number;
	ALM:number;

	BDH:number;
	BDM:number;
	ADH:number;
	ADM:number;

	BNH:number;
	BNM:number;

	timesetH:number;
	timesetM:number;
	FirstStateTime:any ='0';

  constructor(private plt: Platform,
	private localNotifications: LocalNotifications,
	public navCtrl: NavController,
	private storage: Storage,
	public loadingCtrl: LoadingController,
	public loginCtrl: UseUpdateProvider) {
//-------------------------------------------------------------------------

		var reg = this;

		this.plt.ready().then(() => {
		this.localNotifications.on('click', (noti, state) => {
		this.storage.set('AlarmSET',noti.data);
		// alert(state);
		alert(noti.text);
		alert(noti.data);
		alert(noti.data.mydata);
		this.navCtrl.setRoot(WorkalarmPage);
			});
			});
		// Observable.interval(10000).subscribe(()=>
		// {
		
		// });
		Observable.interval(1000).subscribe(()=>
		{
      		reg.momoh = new Date();
				reg.timecount = reg.momoh.getHours()+":"+reg.momoh.getMinutes()+":"+reg.momoh.getSeconds();
				
				this.loginCtrl.dologin()
				.then((data:any) =>{
					// alert(JSON.stringify(data));
					this.storage.set('barcode1',data.BB1);
					this.storage.set('barcode2',data.AB1);
					this.storage.set('barcode3',data.BL1);
					this.storage.set('barcode4',data.AL1);
					this.storage.set('barcode5',data.BD1);
					this.storage.set('barcode6',data.AD1);
					this.storage.set('barcode7',data.BN1);
					
					this.storage.set('StatusBarcode1',data.Beforebreakfast);
					this.storage.set('StatusBarcode2',data.Afterbreakfast);
					this.storage.set('StatusBarcode3',data.Beforelunch);
					this.storage.set('StatusBarcode4',data.Afterlunch);
					this.storage.set('StatusBarcode5',data.Beforedinner);
					this.storage.set('StatusBarcode6',data.Afterdinner);
					this.storage.set('StatusBarcode7',data.Beforenight);
					
					this.storage.set('usernamedb',data.name);
					this.storage.set('emaildb',data.email);
					this.storage.set('teldb',data.tel);
					this.storage.set('agedb',data.age);
		
					this.BBH = data.BBH;
					this.BBM = data.BBM;
					this.ABH = data.ABH;
					this.ABM = data.ABM;
				
					this.BLH = data.BLH;
					this.BLM = data.BLM;
					this.ALH = data.ALH;
					this.ALM = data.ALM;
				
					this.BDH = data.BDH;
					this.BDM = data.BDM;
					this.ADH = data.ADH;
					this.ADM = data.ADM;
				
					this.BNH = data.BNH;
					this.BNM = data.BNM;
					
				});
		//--------------------------------------------------------------------------------------------------------
		if(this.checkstatefirsttime == 1)
		{
		if(this.BBH>this.momoh.getHours() || this.BBH == this.momoh.getHours() && this.BBM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 1;
        this.storage.set('OfflineState',1);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
	  else if(this.ABH > this.momoh.getHours() || this.ABH == this.momoh.getHours() && this.ABM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 2;
        this.storage.set('OfflineState',2);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
	  else if(this.BLH>this.momoh.getHours() || this.BLH == this.momoh.getHours() && this.BLM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 3;
        this.storage.set('OfflineState',3);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
	  else if(this.ALH>this.momoh.getHours() || this.ALH == this.momoh.getHours() && this.ALM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 4;
        this.storage.set('OfflineState',4);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
	  else if(this.BDH>this.momoh.getHours() || this.BDH == this.momoh.getHours() && this.BDM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 5;
        this.storage.set('OfflineState',5);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
      else if(this.ADH>this.momoh.getHours() || this.ADH == this.momoh.getHours() && this.ADM > this.momoh.getMinutes())
      {
        this.FirstStateTime = 6;
        this.storage.set('OfflineState',6);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
      }
      else if((this.BNH>this.momoh.getHours() || this.BNH == this.momoh.getHours() && this.BNM > this.momoh.getMinutes())||(this.BNH<this.momoh.getHours()))
      {
				if(this.BNH < this.momoh.getHours)
				{
					this.FirstStateTime=1;
				}
				else{
        this.FirstStateTime = 7;
        this.storage.set('OfflineState',7);
				this.storage.set('OfflineFirstTime',false);
				this.checkstatefirsttime =0;
        // this.FirstStateTimeUse = false;
			}
		}
      else
      {
        this.FirstStateTime = 8;
			}

		}
		else
		{
			this.storage.get('OfflineState').then((val) => {this.FirstStateTime = val});	
		}  
		if(this.FirstStateTime == 1)
		{
			this.timesetH = this.BBH;
			this.timesetM = this.BBM;
		}
		else if(this.FirstStateTime == 2)
		{
			this.timesetH = this.ABH;
			this.timesetM = this.ABM;
		}
		else if(this.FirstStateTime == 3)
		{
			this.timesetH = this.BLH;
			this.timesetM = this.BLM;
		}
		else if(this.FirstStateTime == 4)
		{
			this.timesetH = this.ALH;
			this.timesetM = this.ALM;
		}
		else if(this.FirstStateTime == 5)
		{
			this.timesetH = this.BDH;
			this.timesetM = this.BDM;
		}
		else if(this.FirstStateTime == 6)
		{
			this.timesetH = this.ADH;
			this.timesetM = this.ADM;
		}
		else if(this.FirstStateTime == 7)
		{
			this.timesetH = this.BNH;
			this.timesetM = this.BNM;
		}
	
	  //-------------------------------------------------------------------------------------------------------------------------------
		this.localNotifications.schedule
		(
			{
        		id: 1,
        		title: 'Medication Reminder',
        		text: 'เเจ้งเตือนการรับประทานยา',
				data: { mydata: 'My hidden message this is' },
				at: new  Date(new Date().setHours(this.timesetH,this.timesetM)) 
					// at: new  Date(new Date().setHours(reg.DataTime[0].H,reg.DataTime[0].M)) 
			}
		);
		});
  }
  ionViewWillEnter()
  	{

	}
	tester()
  {
	this.navCtrl.push(WorkalarmPage);
  }
  snooptime()
  {

	}
}










