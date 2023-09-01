import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLoginBrokerLibraryModule } from 'angular-login-broker-library';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLoginBrokerLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
