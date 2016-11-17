export function calc(interval): number {
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
    id: number;
    type: string;
}

export interface CalcRequest extends Message {
    interval: number;
}

export interface CalcResponse extends Message {
    retVal: number;
}

export interface LoadServiceRequest extends Message {
    url: string;
}

export interface LoadServiceResponse extends Message {
    serviceId: number;
}

export interface InvokeMethodRequest extends Message {
    serviceId: number;
    methodName: string;
    args: any[];
}

export interface InvokeMethodResponse extends Message {
    retVal: any;
}

export function cloneArgs(args) {
    const res = [];

    for(let i=0; i<args.length; i++) {
        res.push(args[i]);
    }

    return res;
}