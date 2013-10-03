/* global _, Backbone*/

var App = App || {};

jQuery(function () {
    "use strict";

    App.events = _.extend({}, Backbone.Events);

    var layouts = {
        "main" :    {route: "main", views: [{name: "about", el: ".content"}], isDefault: true} ,
        "students": {route: "students", views: [{name: "students", el: ".content"}]},
        "student" : {route: "students/:i", views: [{name: "student", el: ".content"}]}
    };

    // App.data contains all the data
    App.events = _.extend({}, Backbone.Events);

    App.appState = new App.AppState(layouts, App.data);

    App.router = new App.Router(App.appState);
    Backbone.history.start();

});