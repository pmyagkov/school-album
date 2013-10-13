/* global define */
define(function () {
    "use strict";

    return [
        {
            id: "about", route: "!/about", title: "О школе",
            views: [{id: "header", el: ".header"}, {id: "twitter", el: ".content"}, {id: "about", el: ".content"}],
            isDefault: true
        },
        {
            id: "students", route: "!/students", title: "Студенты",
            views: [{id: "header", el: ".header"}, {id: "students", el: ".content"}]
        },
        {
            id: "addStudent", route: "!/students/add",
            views: [{id: "header", el: ".header"}, {id: "student", el: ".content"}],
            transitions: {"save": "students", "discard": "students"}
        },
        {
            id: "student", route: "!/students/:i(/:command)",
            views: [{id: "header", el: ".header"}, {id: "student", el: ".content"}],
            transitions: {"save": "students", "discard": "students"}
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
            id: "lecturers", route: "!/lecturers", title: "Лекторы",
            views: [{id: "header", el: ".header"}, {id: "lecturers", el: ".content"}]
        },
        {
            id: "lecturer", route: "!/lecturers/:i",
            views: [{id: "header", el: ".header"}, {id: "lecturer", el: ".content"}]
        }
    ];
});
