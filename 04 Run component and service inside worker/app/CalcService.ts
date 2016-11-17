import {calc} from "./common";

export class CalcService {
    constructor() {
    }

    run(interval: number): Promise<number> {
        return Promise.resolve(calc(interval));
    }
}
