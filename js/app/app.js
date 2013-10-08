/* global require */

requirejs(['backbone', 'jquery', 'underscore',
    'Router', 'events', 'AppState', 'HeaderView'],
    function (Backbone, $, _, Router, events, AppState, HeaderView) {
        "use strict";

        var appState = new AppState();
        var router = new Router(appState);
    }
);
