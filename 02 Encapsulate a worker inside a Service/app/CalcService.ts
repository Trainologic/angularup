import {calc, Message, CalcRequest, CalcResponse} from "./common";

export class CalcService {
    worker: Worker;
    pendingMessages: {[messageId: string]: PendingMessage};
    nextMessageId: number;

    constructor() {
        this.pendingMessages = {};
        this.nextMessageId = 1;

        this.worker = new Worker("/app/workerLoader.js");
        this.worker.addEventListener("message", (e) => {
            const message: CalcResponse = e.data;
            if(message.type == "CALC_DONE") {
                const pending = this.pendingMessages[message.id];
                if (pending) {
                    pending.resolve(message.retVal);
                }
            }
        });
    }

    run(interval): Promise<number> {
        return new Promise((resolve, reject)=> {
            const message: CalcRequest = {
                id: this.nextMessageId++,
                type: "CALC",
                interval: interval,
            };

            this.pendingMessages[message.id] = {
                message: message,
                resolve: resolve,
                reject: reject,
            };

            this.worker.postMessage(message);
        });
    }
}

interface PendingMessage {
    message: Message;
    resolve;
    reject;
}
