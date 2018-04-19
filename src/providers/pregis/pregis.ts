import { Http,Headers,RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PregisProvider {

  constructor(public http: Http) 
  {

  }
  doRegister(email:string,password:string,username:string,){
    return new Promise((resolve,reject)=>{
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers:headers});
      let body = {email:email,password:password,fullname:username,};
      this.http.post('http://f599c770.ngrok.io/api/register',body,options)
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
      },error => {
        reject(error);
      })
    })
  }
}
