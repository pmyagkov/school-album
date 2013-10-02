var App = App || {};

App.ViewFactory = {
    createView: function (name, params) {
        "use strict";

        var view;
        switch (name) {
            case "about":
                view = new App.AboutView({model: App.appState.data.information, el: ".content"});
                break;

            case "students":
                view = new App.StudentsView({model: App.appState.data.students, el: ".content"});
                break;

            case "student":
                if (typeof params.i === "undefined") {
                    throw new Error("Index of the student is not passed to ViewFactory to construct 'student' view");
                }

                var student = App.appState.data.students.get(params.i);
                if (typeof student === "undefined") {
                    throw new Error("A student with id '" + params.i + "' doesn't exist in the collection");
                }

                view = new App.StudentView({model: student, el: ".content"});
                break;

            default:
                throw new Error("Can't find appropriate option to generate a view!");

        }

        return view;
    }
};
