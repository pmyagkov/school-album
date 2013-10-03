var App = App || {};

App.ViewFactory = {
    createView: function (name, el, appData, params) {
        "use strict";

        var view;
        switch (name) {
            case "about":
                view = new App.AboutView({model: appData.information, el: el});
                break;

            case "students":
                view = new App.StudentsView({model: appData.students, el: el});
                break;

            case "student":
                if (!params.length) {
                    throw new Error("Index of the student is not passed to ViewFactory to construct 'student' view");
                }

                var student = appData.students.get(params[0]);
                if (typeof student === "undefined") {
                    throw new Error("A student with id '" + params[0] + "' doesn't exist in the collection");
                }

                view = new App.StudentView({model: student, el: ".content"});
                break;

            default:
                throw new Error("Can't find appropriate option to generate a view!");

        }

        return view;
    }
};
