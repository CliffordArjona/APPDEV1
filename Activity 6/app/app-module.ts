import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Meditations } from './meditations/meditations';
import { Reviews } from './reviews/reviews';
import { Taoteching } from './taoteching/taoteching';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Meditations,
    Reviews,
    Taoteching
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
