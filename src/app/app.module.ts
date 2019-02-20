import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { UserPollComponent } from './user-poll/user-poll.component';

import { APP_BASE_HREF } from '@angular/common';

const config = {
  apiKey: 'AIzaSyDGgjn0W4ELiEdUV_UmcW5pNlTIBragEmA',
  authDomain: 'user-poll-c4cba.firebaseapp.com',
  databaseURL: 'https://user-poll-c4cba.firebaseio.com',
  projectId: 'user-poll-c4cba',
  storageBucket: 'user-poll-c4cba.appspot.com',
  messagingSenderId: '872541457568',
  automaticDataCollectionEnabled: false
};

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    UserPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
  entryComponents: [
    UserPollComponent
  ],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(UserPollComponent, { injector: this.injector });
    customElements.define('user-poll', el);
  }
}
