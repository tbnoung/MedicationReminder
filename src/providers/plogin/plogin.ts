import { Http,Headers,RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class PloginProvider {
  Domainname:string;
  id:string = 'http://'+'f599c770'+'.ngrok.io/api/getid';

  constructor(public http: Http,private storage: Storage) 
  {
    // this.storage.get('Domain').then((val) => {this.Domainname = val;});
  }
  dologin(username:string,password:string){
    return new Promise((resolve,reject)=>{
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers:headers});
      let body = {email:username,password:password};
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