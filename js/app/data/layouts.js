/* global define */
define(function () {
    "use strict";

    return [
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
});