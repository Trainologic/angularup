import {calc, Message, CalcRequest, CalcResponse} from "./common";

export default class CalcService {
    constructor() {
    }

    run(interval): Promise<number> {
        return Promise.resolve(calc(2500));
    }
}
