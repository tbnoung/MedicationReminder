import { EditPage } from './../pages/edit/edit';
import { OflinecheckPage } from './../pages/oflinecheck/oflinecheck';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WorkalarmPage } from './../pages/workalarm/workalarm';
import { ScanPage } from './../pages/scan/scan';
import { TabPage } from './../pages/tab/tab';
import { RegisterPage } from './../pages/register/register';
import { LogoutPage } from './../pages/logout/logout';
import { LoginPage } from './../pages/login/login';
import { OffullPage } from './../pages/offull/offull';
import { OfsetbarPage } from './../pages/ofsetbar/ofsetbar';
import { OfsettimePage } from './../pages/ofsettime/ofsettime';
import { OfflinePage } from './../pages/offline/offline';
import { OflinelogoutPage } from './../pages/oflinelogout/oflinelogout';
import { OflinescanPage } from './../pages/oflinescan/oflinescan';
import { OflineTabPage } from './../pages/ofline-tab/ofline-tab';

import { PloginProvider } from '../providers/plogin/plogin';
import { PregisProvider } from '../providers/pregis/pregis';

import { BackgroundMode } from '@ionic-native/background-mode';
import { PutDeleteProvider } from '../providers/put-delete/put-delete';
import { UseUpdateProvider } from '../providers/use-update/use-update';
import { BeforebreakfastProvider } from '../providers/beforebreakfast/beforebreakfast';
import { AfterbreakfastProvider } from '../providers/afterbreakfast/afterbreakfast';
import { BeforelunchProvider } from '../providers/beforelunch/beforelunch';
import { AfterlunchProvider } from '../providers/afterlunch/afterlunch';
import { BeforedinnerProvider } from '../providers/beforedinner/beforedinner';
import { AfterdinnerProvider } from '../providers/afterdinner/afterdinner';
import { BeforenightProvider } from '../providers/beforenight/beforenight';
import { UsernameProvider } from '../providers/username/username';
import { EmailProvider } from '../providers/email/email';
import { TelProvider } from '../providers/tel/tel';
import { AgeProvider } from '../providers/age/age';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    TabPage,
    ScanPage,
    WorkalarmPage,
    OfflinePage,
    OfsettimePage,
    OfsetbarPage,
    OffullPage,
    OflineTabPage,
    OflinescanPage,
    OflinelogoutPage,
    OflinecheckPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    TabPage,
    ScanPage,
    WorkalarmPage,
    OfflinePage,
    OfsettimePage,
    OfsetbarPage,
    OffullPage,
    OflineTabPage,
    OflinescanPage,
    OflinelogoutPage,
    OflinecheckPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PloginProvider,
    PregisProvider,
    LocalNotifications,
    BarcodeScanner,
    BackgroundMode,
    PutDeleteProvider,
    UseUpdateProvider,
    BeforebreakfastProvider,
    AfterbreakfastProvider,
    BeforelunchProvider,
    AfterlunchProvider,
    BeforedinnerProvider,
    AfterdinnerProvider,
    BeforenightProvider,
    UsernameProvider,
    EmailProvider,
    TelProvider,
    AgeProvider
  ]
})
export class AppModule {}
