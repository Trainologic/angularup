import "reflect-metadata";
import "zone.js";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import CalcService from "./CalcService";
import {createProxyFactory} from "./serviceProxy";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ {provide: "CalcService", useFactory: createProxyFactory("/app/CalcService.js")} ]
})
export class AppModule { }
