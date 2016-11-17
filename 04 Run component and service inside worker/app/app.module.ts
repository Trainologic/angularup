import "reflect-metadata";
import "zone.js";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CalcService} from "./CalcService";
import {WorkerAppModule} from '@angular/platform-webworker';

@NgModule({
    imports: [WorkerAppModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CalcService]
})
export class AppModule {
}
