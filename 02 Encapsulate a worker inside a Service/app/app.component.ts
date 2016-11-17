import { Component } from '@angular/core';
import {calc, CalcRequest} from "./common";
import {CalcService} from "./CalcService";

@Component({
    selector: 'my-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})
export class AppComponent {
    constructor(private calcService: CalcService) {
    }

    calc() {
        this.calcService.run(2500).then(retVal => {
            console.log(retVal);
        });
    }
}
