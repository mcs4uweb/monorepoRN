import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppMaterialModule } from './shared/app-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppMaterialModule, FlexLayoutModule, AppRoutingModule ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
