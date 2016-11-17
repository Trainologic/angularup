/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    SystemJS.config({
        defaultJSExtensions: true,
        paths: {
            'npm:': '/node_modules/'
        },
        map: {
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/platform-webworker': 'npm:@angular/platform-webworker/bundles/platform-webworker.umd.js',
            '@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'zone.js': 'npm:zone.js/dist/zone.js',
            'reflect-metadata': 'npm:reflect-metadata/Reflect.js',
            'text': 'npm:systemjs-plugin-text/text.js',
            'css': 'npm:systemjs-plugin-css/css.js'
        },
        meta: {
            "*.html": {
                loader: "text"
            }
        }
    });
})(this);
