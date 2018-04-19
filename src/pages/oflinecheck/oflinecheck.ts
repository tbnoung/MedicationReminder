import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/Subscription";
@IonicPage()
@Component({
  selector: 'page-oflinecheck',
  templateUrl: 'oflinecheck.html',
})
export class OflinecheckPage {
  data={ };
  
  momoh:any;
  timecount:any;
  
  barcode1:any=0;
  barcode2:any;
  barcode3:any;
  barcode4:any;
  barcode5:any;
  
  statechackBC:any;

  PamacTime:Array<boolean>;
  count:number=0;

  BarcodeDataStore:Array<any>;
  BarcodeUse:Array<any> = [];
  countarrayUSE:number;
  TTFF:any = 'i dont know';

  StatusEat:Array<any> = [];
  option:BarcodeScannerOptions ;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,public barcodeScanner:BarcodeScanner) 
  {
    var reg = this;
    this.storage.get('OfflineState').then((val) => {this.statechackBC = val});
    this.storage.get('OfflineBarcode').then((val) => {this.BarcodeDataStore = val});

    this.storage.get('StatusEatNow').then((val) => {this.StatusEat = val});
    //------------------------------------------------------------------------------

    Observable.interval(1000).subscribe(()=>
		{

      reg.momoh = new Date();
		  	reg.timecount = reg.momoh.getHours()+":"+reg.momoh.getMinutes()+":"+reg.momoh.getSeconds();

      this.storage.get('CountArray').then((val) => {this.countarrayUSE = val});
      
      if(this.statechackBC == 1)
      {
        this.storage.get('OfflinePamac1').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 2)
      {
        this.storage.get('OfflinePamac2').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 3)
      {
        this.storage.get('OfflinePamac3').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 4)
      {
        this.storage.get('OfflinePamac4').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 5)
      {
        this.storage.get('OfflinePamac5').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 6)
      {
        this.storage.get('OfflinePamac6').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else if(this.statechackBC == 7)
      {
        this.storage.get('OfflinePamac7').then((val) => {this.PamacTime = val});
      }
      //------------------------------------------------------------------------------
      else
      {
        this.statechackBC == 1;
      }
      //------------------------------------------------------------------------------
      // for(let i = 0; i <= this.PamacTime.length; i++)
      // {
      //   if(this.PamacTime[i] == true)
      //   {
      //     this.BarcodeUse.push(this.BarcodeDataStore[i]);
      //   }

      // }

      
    });
  }
  scan(){

    this.option = {

      prompt: "Please scan your code"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.data = barcodeData;
      for(let i = 0; i <= this.PamacTime.length; i++)
      {
        if(this.PamacTime[i] == true && barcodeData.text == this.BarcodeDataStore[i])
        {
          for(let B = 0; B <= this.PamacTime.length; B++)
          {
            this.TTFF = "OK"
            if(this.statechackBC<7)
            {
              this.storage.set('OfflineState',this.statechackBC+1);
            }
            else
            {
              this.storage.set('OfflineState',1);
              this.statechackBC=1;
            }
            if(this.PamacTime[B] == true)
            {
              this.StatusEat[B]=(this.timecount);
            }
            
          }
        }
      }
      this.storage.set('StatusEatNow',this.StatusEat);
      // if(((barcodeData.text == this.BarcodeDataStore[0]) && (this.PamacTime[0] == true)) || 
      //    ((barcodeData.text == this.BarcodeDataStore[1]) && (this.PamacTime[1] == true)) || 
      //    ((barcodeData.text == this.BarcodeDataStore[2]) && (this.PamacTime[2] == true)) || 
      //    ((barcodeData.text == this.BarcodeDataStore[3]) && (this.PamacTime[3] == true)) || 
      //    ((barcodeData.text == this.BarcodeDataStore[4]) && (this.PamacTime[4] == true)))
      // {
      //   this.TTFF = "that'OK"
      //   this.storage.set('OfflineState',this.statechackBC+1);
      //   this.navCtrl.pop();
      // }
     
     }, (err) => {
         // An error occurred
         console.log(err);
     });
    //  if(this.TTFF == "OK")
    //  {
    //   for(let i = 0; i <= this.PamacTime.length; i++)
    //   {
    //     if(this.PamacTime[i] == true)
    //     {
    //       this.StatusEat[i]=(this.timecount);
    //     }
    //   }
    //   this.TTFF == "not"
    //   this.navCtrl.pop();
    //  }
  }
  test()
  {
    this.StatusEat[0]=(this.timecount);
      //   for(let i = 0; i <= this.PamacTime.length; i++)
      // {
      //   if(this.PamacTime[i] == true)
      //   {
      //     this.BarcodeUse.push(this.BarcodeDataStore[i]);
      //   }
      // }
  }

  test2()
  {
    alert(this.StatusEat);
  }
  test3()
  {
    alert(this.StatusEat[0]);
  }

  pop()
  {
    for(let i = 0; i <= this.PamacTime.length; i++)
          {
            if(this.PamacTime[i] == true)
            {
              // this.StatusEat[i].push("กินแล้ว");
              this.StatusEat[i]=(this.timecount);
              this.TTFF = "that'OK"
              // this.storage.set('OfflineState',this.statechackBC+1);
                // this.storage.set('StatusEatNow',this.StatusEat);
              // this.navCtrl.pop();
            // this.BarcodeUse.push(this.BarcodeDataStore[i]);
            }
          }
  }

}
