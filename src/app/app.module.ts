import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from 'angularfire2';

import {AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

var config = {
  apiKey: "AIzaSyBTedUXOczJTAD3Z0IV0NsjD5_KESeAPIo",
  authDomain: "islamapp-3077e.firebaseapp.com",
  databaseURL: "https://islamapp-3077e.firebaseio.com",
  projectId: "islamapp-3077e",
  storageBucket: "islamapp-3077e.appspot.com",
  messagingSenderId: "562605288037"
};

@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
