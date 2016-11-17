importScripts("../node_modules/systemjs/dist/system.src.js");
importScripts("../node_modules/reflect-metadata/Reflect.js");

SystemJS.config({
    defaultJSExtensions: true,
    paths: {
        'npm:': '/node_modules/'
    },
    map: {
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        'rxjs': 'npm:rxjs',
    }
});

SystemJS.import("./serviceHost.js");
