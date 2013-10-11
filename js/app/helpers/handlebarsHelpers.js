/* define */

define(['handlebars'], function (Handlebars) {
    "use strict";

    var months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    Handlebars.registerHelper('formatDate', function(date) {
        var result = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " года";
        return result;
    });

    return Handlebars;
});


