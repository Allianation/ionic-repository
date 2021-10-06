import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NotesService } from '../services/notes.service';
import { DetailPage } from '../pages/detail/detail';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4TVVVfL-Ne5a0vt9TZOcUxpPkDLxBAUI",
  authDomain: "notionic-39658.firebaseapp.com",
  databaseURL: "https://notionic-39658-default-rtdb.firebaseio.com/",
  projectId: "notionic-39658",
  storageBucket: "notionic-39658.appspot.com",
  messagingSenderId: "1093359834639",
  appId: "1:1093359834639:web:18e2bd62595ba4072e757a",
  measurementId: "G-K4RJLWPVLV"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService,
  ]
})
export class AppModule {}
