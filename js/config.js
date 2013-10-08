/* global require */
require.config({
    deps: ['app'],
    baseUrl: 'js/app',
    paths: {
        // libs
        backbone: '../lib/backbone',
        underscore: '../lib/underscore',
        jquery: '../lib/jquery',
        handlebars: '../lib/handlebars',
        // app
        Router: 'Router',
        // objects
        events: 'Events',
        layoutsObj: 'data/layouts',
        dataObj: 'data/data',
        // utils
        Utils: 'Utils',
        // models
        AppState: 'models/AppState',
        AboutModel: 'models/AboutModel',
        LayoutModel: 'models/LayoutModel',
        StudentModel: 'models/StudentModel',
        // collections
        LayoutCollection: 'collections/LayoutCollection',
        StudentCollection: 'collections/StudentCollection',
        // views
        HeaderView: 'views/HeaderView',
        AboutView: 'views/AboutView',
        StudentView: 'views/StudentView',
        StudentsView: 'views/StudentsView',
        BaseView: 'views/BaseView',
        ViewFactory: 'views/ViewFactory',
        //templates
        templates: 'compiled/templates'
    },

    shim: {
        underscore: {
            deps: [],
            exports: '_'
        },
        jquery: {
            deps: [],
            exports: 'jQuery'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});


