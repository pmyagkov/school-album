/* global require */
requirejs.config({
    deps: ['app'],
    baseUrl: 'js/app',
    paths: {
        // libs
        backbone: '../lib/backbone-min',
        localStorage: '../lib/backbone.localStorage-min',
        relational: '../lib/backbone-relational',
        underscore: '../lib/underscore-min',
        jquery: '../lib/jquery.min',
        "jquery.validate": '../lib/jquery.validate',
        handlebars: '../lib/handlebars-runtime',
        // app
        // controllers
        Router: 'controllers/Router',
        AppStateController: 'controllers/AppStateController',
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
        BaseCollection: 'collections/BaseCollection',
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
        LecturerView: 'views/LecturerView',
        LecturersView: 'views/LecturersView',
        TwitterView: 'views/TwitterView',
        BaseView: 'views/BaseView',
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
        "jquery.validate": {
            deps: ['jquery'],
            exports: 'jQuery'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        relational: {
            deps: ['backbone'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }

    }
});


