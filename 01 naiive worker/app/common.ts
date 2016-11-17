export function calc(interval) {
    console.log("calc.begin");

    const before = new Date();
    while(true) {
        const now = new Date();
        if(now.valueOf() - before.valueOf() > interval) {
            break;
        }
    }

    console.log("calc.end");

    return 42;
}

export interface Message {
    type:string;
}

export interface CalcRequest extends Message {
    interval: number;
}
