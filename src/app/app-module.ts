import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { TrainerForm } from './trainer-form/trainer-form';

@NgModule({
  declarations: [App, TrainerForm],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
