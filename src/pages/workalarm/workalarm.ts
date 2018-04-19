import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { PutDeleteProvider } from '../../providers/put-delete/put-delete';

import { BeforebreakfastProvider } from '../../providers/beforebreakfast/beforebreakfast';
import { AfterbreakfastProvider } from '../../providers/afterbreakfast/afterbreakfast';
import { BeforelunchProvider } from '../../providers/beforelunch/beforelunch';
import { AfterlunchProvider } from '../../providers/afterlunch/afterlunch';
import { BeforedinnerProvider } from '../../providers/beforedinner/beforedinner';
import { AfterdinnerProvider } from '../../providers/afterdinner/afterdinner';
import { BeforenightProvider } from '../../providers/beforenight/beforenight';

import { Observable } from 'Rxjs/rx';
@IonicPage()
@Component({
  selector: 'page-workalarm',
  templateUrl: 'workalarm.html',
})
export class WorkalarmPage {
  proviSet:string="Beforenight";
  dataProvi:string="YouCanDoIt";

  momoh:any;
  textshow:string="Don't Know";
  state:number;
  barcodealarm:any;
  data={ };
  option:BarcodeScannerOptions ;
  status:string;
  nameset:string;
  constructor(public loginCtrl: PutDeleteProvider,public navCtrl: NavController,private storage: Storage, public barcodeScanner:BarcodeScanner,public afterbreakfast : AfterbreakfastProvider,
            public beforebreakfast : BeforebreakfastProvider,public afterlunch : AfterlunchProvider,public beforelunch : BeforelunchProvider,public afterdinner : AfterdinnerProvider,
          public beforedinner : BeforedinnerProvider,public beforenight : BeforenightProvider) 
  {
    this.momoh = new Date();
    this.storage.get('OfflineState').then((val) => {this.state = val });
    Observable.interval(1000).subscribe(()=>
		{
    if(this.state == 1)
    {
      this.storage.get('barcode1').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode1').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Beforebreakfast");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 2)
    {
      this.storage.get('barcode2').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode2').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Afterbreakfast");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 3)
    {
      this.storage.get('barcode3').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode3').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Beforelunch");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 4)
    {
      this.storage.get('barcode4').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode4').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Afterlunch");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 5)
    {
      this.storage.get('barcode5').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode5').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Beforedinner");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 6)
    {
      this.storage.get('barcode6').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode6').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Afterdinner");
      this.storage.set('Timestamp',"yes");
    }
    else if(this.state == 7)
    {
      this.storage.get('barcode7').then((val) => {this.barcodealarm = val });
      this.storage.get('StatusBarcode7').then((val)=> {this.status = val });
      this.storage.set('NameSetProvider',"Beforenight");
      this.storage.set('Timestamp',"yes");
    }
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
      if(barcodeData.text == this.barcodealarm)
      {
        if(this.state == 1)
        {
          this.beforebreakfast.dologin(this.momoh)
        .then((data:any) =>
        {
          this.textshow = "OK";
          this.storage.set('OfflineState',this.state+1);
        });
        }
        else  if(this.state == 2)
        {
          {
            this.afterbreakfast.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        else if(this.state == 3)
        {
          {
            this.beforelunch.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        else  if(this.state == 4)
        {
          {
            this.afterlunch.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        else  if(this.state == 5)
        {
          {
            this.beforedinner.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        else  if(this.state == 6)
        {
          {
            this.afterdinner.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        else  if(this.state == 7)
        {
          {
            this.beforenight.dologin(this.momoh)
          .then((data:any) =>
          {
            this.textshow = "OK";
            this.storage.set('OfflineState',this.state+1);
          });
          }
        }
        
        
      }
      else
      {
        this.textshow = "It'Not";
      }

     }, (err) => {
         // An error occurred
         console.log(err);
     });

  }
}
