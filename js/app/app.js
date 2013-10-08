/* global require */

requirejs(['backbone', 'jquery', 'underscore',
    'Router', 'events', 'AppState'],
    function (Backbone, $, _, Router, events, AppState) {
        "use strict";

        var appState = new AppState();
        var router = new Router(appState);

        appState.getStudents().save();


    }
);
