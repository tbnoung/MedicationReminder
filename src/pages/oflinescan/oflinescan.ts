import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-oflinescan',
  templateUrl: 'oflinescan.html',
})
export class OflinescanPage {
  data={ };
  Showname:any;
  ShowTime:any;
  option:BarcodeScannerOptions ;
  BarcodeDataStore:Array<any>;

  NameDataStore:Array<any>;
  TNowDataStore:Array<any>;
  constructor(private storage: Storage,public navCtrl: NavController,public barcodeScanner:BarcodeScanner) 
  {
    this.storage.get('OfflineBarcode').then((val) => {this.BarcodeDataStore = val});
    this.storage.get('OfflineName').then((val) => {this.NameDataStore = val});
    this.storage.get('StatusEatNow').then((val) => {this.TNowDataStore = val});
    
  }

  scan(){

    this.option = {

      prompt: "Please scan your code"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      
      console.log(barcodeData);
      this.data = barcodeData;
      for(let i = 0; i <= this.BarcodeDataStore.length; i++)
      {
        if(barcodeData.text == this.BarcodeDataStore[i])
        {
          this.Showname=this.NameDataStore[i];
          this.ShowTime=this.TNowDataStore[i];
        }
        
      }

     }, (err) => {
         console.log(err);
     });

  }

}
