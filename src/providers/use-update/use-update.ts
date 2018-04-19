import { Http,Headers,RequestOptions  } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class UseUpdateProvider {
  Domainname:string;
  id:string = 'http://'+'f599c770'+'.ngrok.io/api/reqid';
  constructor(public http: Http,private storage: Storage,public loadingCtrl: LoadingController,) 
  {
    let loading = this.loadingCtrl.create({
  		content:'Loading...',
  		spinner:'circles'
  	});
	  loading.present();
    this.storage.get('ID').then((val) => {this.Domainname = val;});
    loading.dismiss();
  }
  dologin(){
    return new Promise((resolve,reject)=>{
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers:headers});
      
      let body = {_id:this.Domainname};
      this.http.post(this.id,body,options)
      
      // this.http.post('http://'+this.Domainname+'.ngrok.io/api/login',body,options)
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
      },error => {
        reject(error);
      })
    })
  }
}