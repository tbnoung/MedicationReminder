import { OfsettimePage } from './../ofsettime/ofsettime';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-ofsetbar',
  templateUrl: 'ofsetbar.html',
})
export class OfsetbarPage {
  checkSet:number;

  buttonA :boolean=true;
  buttonB :boolean=true;

  textbutton1:any="Scan";
  textbutton2:any="Next";

  SetTime1:boolean=false;
  SetTime2:boolean=false;
  SetTime3:boolean=false;
  SetTime4:boolean=false;
  SetTime5:boolean=false;
  SetTime6:boolean=false;
  SetTime7:boolean=false;

  namepamac:string;
  Time1:Array<boolean> = [];
  Time2:Array<boolean> = [];
  Time3:Array<boolean> = [];
  Time4:Array<boolean> = [];
  Time5:Array<boolean> = [];
  Time6:Array<boolean> = [];
  Time7:Array<boolean> = [];
  StatusEat:Array<any> = [];
  BarcodeArray:Array<any> = [];
  NameArray:Array<string> = [];
  Name: string = "กรอกชื่อยา";
  ID : any;
  CountArray:number=0;
  // DataSet:Array<{BarcodeID:string,NameMedication:string,property:string,pill:number,timelast:string}> = [];

  data={ };

  option:BarcodeScannerOptions ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner:BarcodeScanner,private storage: Storage,public alertCtrl: AlertController) 
  {
    
  }
 Scan()
  {
    if(this.buttonA == true)
    {
      this.option = {

        prompt: "Please scan your code"
      }
      this.barcodeScanner.scan(this.option).then((barcodeData) => {
        // Success! Barcode data is here
        console.log(barcodeData);
        this.data = barcodeData.text;
        this.ID = barcodeData;
       }, (err) => {
           // An error occurred
           console.log(err);
       });

      this.textbutton1 = "OK";
      this.textbutton2 = "Cancel";
      
      this.buttonA = false;
      this.buttonB = false;
    }
    else
    {
      this.StatusEat.push("ยังไม่ได้รับประทาน");
      this.Time1.push(this.SetTime1);
      this.Time2.push(this.SetTime2);
      this.Time3.push(this.SetTime3);
      this.Time4.push(this.SetTime4);
      this.Time5.push(this.SetTime5);
      this.Time6.push(this.SetTime6);
      this.Time7.push(this.SetTime7);
      this.NameArray.push(this.Name);
      this.BarcodeArray.push(this.data);
      this.CountArray=this.CountArray+1;
      this.ID = "";
      this.namepamac = "";

      this.textbutton1 = "Scan";
      this.textbutton2 = "Next";
      this.buttonA = true;
      this.buttonB = true;
      // alert(this.Time1);
    }
  }
  Next()
  {
    if(this.buttonB == true)
    {
      this.storage.set('OfflineBarcode',this.BarcodeArray);
      this.storage.set('OfflineName',this.NameArray);

      this.storage.set('OfflinePamac1',this.Time1);
      this.storage.set('OfflinePamac2',this.Time2);
      this.storage.set('OfflinePamac3',this.Time3);
      this.storage.set('OfflinePamac4',this.Time4);
      this.storage.set('OfflinePamac5',this.Time5);
      this.storage.set('OfflinePamac6',this.Time6);
      this.storage.set('OfflinePamac7',this.Time7);
      this.storage.set('CountArray',this.CountArray);

      this.storage.set('StatusEatNow',this.StatusEat);

      this.navCtrl.push(OfsettimePage);
      // this.textbutton1 = "OK";
      // this.textbutton2 = "Cancel";
      
      // this.buttonA = false;
      // this.buttonB = false;
    }
    else
    {
      this.textbutton1 = "Scan";
      this.textbutton2 = "Next";
      this.buttonA = true;
      this.buttonB = true;
      this.ID = "";
      this.namepamac = "";
      this.SetTime1=false;
      this.SetTime2=false;
      this.SetTime3=false;
      this.SetTime4=false;
      this.SetTime5=false;
      this.SetTime6=false;
      this.SetTime7=false;
    }
   
  }
}



