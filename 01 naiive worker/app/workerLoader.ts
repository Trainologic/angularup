importScripts("/node_modules/systemjs/dist/system.src.js");

SystemJS.config({
    defaultJSExtensions: true,
});

SystemJS.import("/app/worker.js");