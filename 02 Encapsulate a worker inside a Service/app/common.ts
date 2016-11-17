export function calc(interval) {
    console.log("exec.begin");

    const before = new Date();
    while(true) {
        const now = new Date();
        if(now.valueOf() - before.valueOf() > interval) {
            break;
        }
    }

    console.log("exec.end");

    return 42;
}

export interface Message {
    id: number;
    type: string;
}

export interface CalcRequest extends Message {
    interval: number;
}

export interface CalcResponse extends Message {
    retVal: number;
}
