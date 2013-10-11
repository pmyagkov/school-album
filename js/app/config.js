/* global require */
requirejs.config({
    deps: ['app'],
    baseUrl: 'js/app',
    paths: {
        // libs
        backbone: '../lib/backbone',
        localStorage: '../lib/backbone.localStorage',
        underscore: '../lib/underscore',
        jquery: '../lib/jquery',
        handlebars: '../lib/handlebars-runtime',
        // app
        Router: 'Router',
        // objects
        events: 'Events',
        layoutsObj: 'data/layouts',
        dataObj: 'data/data',
        // utils
        Utils: 'Utils',
        helpers: 'helpers/handlebarsHelpers',
        // models
        AppState: 'models/AppState',
        AboutModel: 'models/AboutModel',
        LayoutModel: 'models/LayoutModel',
        StudentModel: 'models/StudentModel',
        LectureModel: 'models/LectureModel',
        LecturerModel: 'models/LecturerModel',
        // collections
        LayoutCollection: 'collections/LayoutCollection',
        StudentCollection: 'collections/StudentCollection',
        LectureCollection: 'collections/LectureCollection',
        LecturerCollection: 'collections/LecturerCollection',
        // views
        HeaderView: 'views/HeaderView',
        AboutView: 'views/AboutView',
        StudentView: 'views/StudentView',
        StudentsView: 'views/StudentsView',
        LectureView: 'views/LectureView',
        LecturesView: 'views/LecturesView',
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


