import "reflect-metadata";
import "zone.js";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CalcService} from "./CalcService";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ CalcService ]
})
export class AppModule {
}
