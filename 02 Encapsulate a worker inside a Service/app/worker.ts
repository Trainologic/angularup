import {calc, CalcRequest, CalcResponse} from "./common";

addEventListener("message", function(e) {
    const message: CalcRequest = e.data;

    if(message.type == "CALC") {
        const retVal = calc(message.interval);

        const response: CalcResponse = {
            id: message.id,
            type: "CALC_DONE",
            retVal: retVal,
        };

        postMessage(response, undefined);
    }
});
