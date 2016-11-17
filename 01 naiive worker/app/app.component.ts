import { Component } from '@angular/core';
import {calc, CalcRequest} from "./common";

@Component({
    selector: 'my-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})
export class AppComponent {
    worker: Worker;

    constructor() {
        this.worker = new Worker("/app/workerLoader.js");

        this.worker.addEventListener("message", e => {
            if(e.data.type == "CALC_DONE") {
                console.log(e.data.retVal);
            }
        });
    }

    calc() {
        const message: CalcRequest = {
            type: "CALC",
            interval: 2500,
        };

        this.worker.postMessage(message);
    }
}
