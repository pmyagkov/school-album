/* global _, Backbone*/

var App = App || {};

jQuery(function () {
    "use strict";

    App.events = _.extend({}, Backbone.Events);

    var layoutObj = {
        layouts : {
            "students" : ["about", "students"],
            "student" : ["student"]
        },
        el: ".content"
    };

    // App.data contains all the data

    App.events = _.extend({}, Backbone.Events);

    App.appState = new App.AppState(layoutObj, App.data);

    App.router = new App.Router();
    Backbone.history.start();

});