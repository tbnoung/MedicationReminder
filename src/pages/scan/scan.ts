import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage'; 
@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  
})
export class ScanPage {
  showstatus:any;

  barcode1:string;
  barcode2:string;
  barcode3:string;
  barcode4:string;
  barcode5:string;
  barcode6:string;
  barcode7:string;

  Status1:string;
  Status2:string;
  Status3:string;
  Status4:string;
  Status5:string;
  Status6:string;
  Status7:string;


  data={ };

  option:BarcodeScannerOptions ;

  constructor(public navCtrl: NavController,private storage : Storage,public barcodeScanner:BarcodeScanner) 
  {
    this.storage.get('barcode1').then((val) => {this.barcode1 = val });
    this.storage.get('barcode2').then((val) => {this.barcode2 = val });
    this.storage.get('barcode3').then((val) => {this.barcode3 = val });
    this.storage.get('barcode4').then((val) => {this.barcode4 = val });
    this.storage.get('barcode5').then((val) => {this.barcode5 = val });
    this.storage.get('barcode6').then((val) => {this.barcode6 = val });
    this.storage.get('barcode7').then((val) => {this.barcode7 = val });

    this.storage.get('StatusBarcode1').then((val) => {this.Status1 = val });
    this.storage.get('StatusBarcode2').then((val) => {this.Status2 = val });
    this.storage.get('StatusBarcode3').then((val) => {this.Status3 = val });
    this.storage.get('StatusBarcode4').then((val) => {this.Status4 = val });
    this.storage.get('StatusBarcode5').then((val) => {this.Status5 = val });
    this.storage.get('StatusBarcode6').then((val) => {this.Status6 = val });
    this.storage.get('StatusBarcode7').then((val) => {this.Status7 = val });

  }

  scan(){

    this.option = {

      prompt: "Please scan your code"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.data = barcodeData;
      if(barcodeData.text == this.barcode1)
      {
        this.showstatus = this.Status1;
      }
      else if(barcodeData.text == this.barcode2)
      {
        this.showstatus = this.Status2;
      }
      else if(barcodeData.text == this.barcode3)
      {
        this.showstatus = this.Status3;
      }
      else if(barcodeData.text == this.barcode4)
      {
        this.showstatus = this.Status4;
      }
      else if(barcodeData.text == this.barcode5)
      {
        this.showstatus = this.Status5;
      }
      else if(barcodeData.text == this.barcode6)
      {
        this.showstatus = this.Status6;
      }
      else if(barcodeData.text == this.barcode7)
      {
        this.showstatus = this.Status7;
      }

     }, (err) => {
         // An error occurred
         console.log(err);
     });

  }

}