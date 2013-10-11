/* global require */

requirejs(['backbone', 'jquery', 'underscore',
    'Router', 'events', 'AppState', 'ViewFactory', 'Utils', 'dataObj'],
    function (Backbone, $, _, Router, events, AppState, ViewFactory, Utils, dataObj) {
        "use strict";

        var appState = new AppState();
        var router = new Router(appState, ViewFactory);

        /*appState.getStudents().save();*/


    }
);
