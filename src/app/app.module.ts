import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {App} from './app';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes/routes';
import {ComponentModule} from '../components/component-module';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
