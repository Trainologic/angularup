import { Component } from '@angular/core';
import {calc} from "./common";

@Component({
    selector: 'my-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})
export class AppComponent {
    worker: Worker;

    constructor() {
        this.worker = new Worker("
    }

    calc() {
        const retVal = calc(2500);
        console.log(retVal);
    }
}
