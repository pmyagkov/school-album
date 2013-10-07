/* global _, Backbone*/

var App = App || {};

App.convertStudents = function (students) {
    "use strict";

    var validateLink = function (link) {
        return link && link.length && link.length > 5;
    };

    _.each(students, function (e, i) {

        e.id = i + 1;
        delete e.timestamp;

        e.userpic = e.linkPhoto;
        delete e.linkPhoto;

        e.links = {};

        var link = e.linkVk;
        if (validateLink(link)) {
            e.links.vk = link;

        }

        link = e.linkFacebook;
        if (validateLink(link)) {
            e.links.facebook = link;

        }

        link = e.linkGihub;
        if (validateLink(link)) {
            e.links.github = link;
        }

        link = e.linkYaru;
        if (validateLink(link)) {
            e.links.ya = link;
        }

        delete e.linkVk;
        delete e.linkFacebook;
        delete e.linkGihub;
        delete e.linkYaru;

        return e;
    });

    return JSON.stringify(App.data.students);
};

/*
var str = App.convertStudents(App.data.students);
var a = 1;
*/

var layouts = [
    {
        id: "main", route: "!/main", title: "Главная",
        views: [{id: "header", el: ".header"}, {id: "about", el: ".content"}],
        isDefault: true
    },
    {
        id: "students", route: "!/students", title: "Студенты",
        views: [{id: "header", el: ".header"}, {id: "students", el: ".content"}]
    },
    {
        id: "student", route: "!/students/:i",
        views: [{id: "header", el: ".header"}, {id: "student", el: ".content"}]
    },
    {
        id: "lectures", route: "!/lectures", title: "Лекции",
        views: [{id: "header", el: ".header"}, {id: "lectures", el: ".content"}]
    },
    {
        id: "lecture", route: "!/lectures/:i",
        views: [{id: "header", el: ".header"}, {id: "lecture", el: ".content"}]
    },
    {
        id: "lecturer", route: "!/lecturers/:i",
        views: [{id: "header", el: ".header"}, {id: "lecturer", el: ".content"}]
    }
];

// App.data contains all the data
App.events = _.extend({}, Backbone.Events);

App.appState = new App.AppState(layouts, App.data);

App.router = new App.Router(App.appState);