import {calc, CalcRequest} from "./common";

addEventListener("message", function(e) {
    const message = e.data;

    if(message.type == "CALC") {
        const message: CalcRequest = e.data;
        const retVal = calc(message.interval);

        postMessage({
            type: "CALC_DONE",
            retVal: retVal,
        }, undefined);
    }
});
