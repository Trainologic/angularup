import {LoadServiceResponse, InvokeMethodRequest, cloneArgs, InvokeMethodResponse} from "./common";
declare var Proxy;

const dummy = new (function Dummy(){});
const pending = {};
const proxies = {};
let nextMessageId = 1;

export function createProxyFactory(url) {
    let serviceId: number = null;

    return function() {
        const worker = new Worker("/app/serviceHostLoader.js");

        worker.addEventListener("message", function (e) {
            const message = e.data;

            if (message.type == "INIT") {
                worker.postMessage({
                    type: "LOAD",
                    url: url,
                })
            }
            else if(message.type == "LOAD_DONE") {
                const message: LoadServiceResponse = e.data;
                serviceId = message.serviceId;
            }
            else if(message.type == "INVOKE_DONE") {
                const message: InvokeMethodResponse = e.data;
                const entry = pending[message.id];
                if(entry) {
                    entry.resolve(message.retVal);
                }
            }
        });

        return new Proxy(dummy, {
            get: function (target, property, receiver) {
                return function() {
                    const args = cloneArgs(arguments);

                    return new Promise((resolve, reject) => {
                        const messageId = nextMessageId++;

                        pending[messageId] = {
                            resolve: resolve,
                            reject: reject,
                        }

                        const request: InvokeMethodRequest = {
                            id: messageId,
                            type: "INVOKE",
                            serviceId: serviceId,
                            methodName: property,
                            args: args,
                        };

                        worker.postMessage(request);
                    });
                }
            },
        });
    }
}
