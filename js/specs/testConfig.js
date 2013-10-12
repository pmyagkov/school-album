/* global require */
requirejs.config({
    deps: [''],
    baseUrl: 'js/app',
    paths: {
        jasmine: "../lib/jasmine",
        "jasmine-html": "../lib/jasmine-html",
        sinon: "../lib/sinon"
    },
    shim: {
        jasmine: {
            deps: [],
            exports: "jasmine"
        },
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "jasmine"
        },
        sinon: {
            exports: "sinon"
        }
    }
});


