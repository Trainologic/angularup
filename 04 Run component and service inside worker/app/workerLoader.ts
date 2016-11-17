importScripts(
    "/node_modules/systemjs/dist/system.src.js",
    "/systemjs.config.js",
)

SystemJS.import("/app/workerMain.js");