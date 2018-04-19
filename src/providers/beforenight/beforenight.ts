
import { Http,Headers,RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class BeforenightProvider{
  Domainname:string;
  NameProvider:string;
  timeS:string;
  // id:string = 'http://'+'5f5f6429'+'.ngrok.io/api/'+this.Domainname;

  constructor(public http: Http,private storage: Storage) 
  {
    this.storage.get('ID').then((val) => {this.Domainname = val;});
    this.storage.get('NameSetProvider').then((val) => {this.NameProvider = val;});
    this.storage.get('Timestamp').then((val) => {this.timeS = val;});
    
  }
  dologin(data:string){
    return new Promise((resolve,reject)=>{
      let tcr = this;
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers:headers});
      let providerN = tcr.NameProvider;
      var test = "monmon";
      let body = {Beforenight:data};
      // this.http.put('http://5f5f6429.ngrok.io/api/'+this.Domainname,'{'+this.NameProvider+':'+this.timeS+'}',options)
      this.http.put('http://f599c770.ngrok.io/api/'+this.Domainname,body,options)
      
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

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the BeforenightProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class BeforenightProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello BeforenightProvider Provider');
//   }

// }


