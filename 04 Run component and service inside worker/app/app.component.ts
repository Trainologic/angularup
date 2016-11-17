import {Component, Inject} from '@angular/core';
import {CalcService} from "./CalcService";

@Component({
    selector: 'my-app',
    template: require("./app.component.html!text"),
    styles: [require("./app.component.css!text")]
})
export class AppComponent {
    constructor(private calcService: CalcService) {
    }

    calc() {
        this.calcService.run(2500).then(val => {
            console.log(val);
        });
    }
}