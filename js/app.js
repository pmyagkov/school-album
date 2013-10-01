var App = App || {};

jQuery(function ($) {
    "use strict";

    var about = new App.AboutModel(window.data.information);
    var aboutView = new App.AboutView({model: about, el: ".content"});
    aboutView.render();
    /*    var students = new App.StudentCollection(window.data.students);
     var studentsView = new App.StudentsView({model: students, el: ".content"});
     studentsView.render();*/
});