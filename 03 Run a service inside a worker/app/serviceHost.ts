import {Message, LoadServiceRequest, InvokeMethodRequest, InvokeMethodResponse, LoadServiceResponse} from "./common";
import {ReflectiveInjector} from '@angular/core';
import CalcService from "./CalcService";

interface ServiceEntry {
    id: number;
    instance: any;
}

const providers = [
    CalcService,
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const services: {[serviceId: string]: ServiceEntry} = {};
let nextServiceId: 1;

addEventListener("message", function (e) {
    const message: Message = e.data;

    if (message.type == "LOAD") {
        const message: LoadServiceRequest = e.data;

        SystemJS.import(message.url).then(module => {
            const serviceId = nextServiceId++;
            const entry: ServiceEntry = {
                id: serviceId,
                instance: injector.get(module.default)
            };

            services[entry.id] = entry;

            const response: LoadServiceResponse = {
                id: message.id,
                type: "LOAD_DONE",
                serviceId,
            };

            postMessage(response, undefined);
        });
    }
    else if (message.type == "INVOKE") {
        const message: InvokeMethodRequest = e.data;

        const entry = services[message.serviceId];
        if (entry) {
            const service = entry.instance;
            const method = service[message.methodName];
            const promise = method.apply(service, message.args);

            promise.then(retVal => {
                const response: InvokeMethodResponse = {
                    id: message.id,
                    type: "INVOKE_DONE",
                    retVal,
                };

                postMessage(response, undefined);
            });
        }
    }
});

postMessage({type: "INIT"}, undefined);