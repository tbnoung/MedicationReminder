import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';
import { OflineTabPage } from '../pages/ofline-tab/ofline-tab';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {

    this.storage.get('roota').then((val) => 
    {
      if (val == 2)
      {
        
        this.rootPage = TabPage;
      }
      else if(val == 3)
      {
        this.rootPage = OflineTabPage;
      }
      else
      {
        this.rootPage = LoginPage;
      }
      
    });
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

