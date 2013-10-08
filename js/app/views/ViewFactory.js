/* global define */
define(['HeaderView', 'AboutView', 'StudentView', 'StudentsView'],
    function (HeaderView, AboutView, StudentView, StudentsView) {
        "use strict";

        return {
            createView: function (name, el, appState, params) {
                var view;
                switch (name) {
                    case "header":
                        view = new HeaderView({model: appState.getLayouts(), el: el});
                        break;

                    case "about":
                        view = new AboutView({model: appState.getAbout(), el: el});
                        break;

                    case "students":
                        view = new StudentsView({model: appState.getStudents(), el: el});
                        break;

                    case "student":
                        if (!params.length) {
                            throw new Error("Index of the student is not passed to ViewFactory to construct 'student' view");
                        }

                        var student = appState.getStudent(params[0]);
                        if (typeof student === "undefined") {
                            throw new Error("A student with id '" + params[0] + "' doesn't exist in the collection");
                        }

                        view = new StudentView({model: student, el: ".content"});
                        break;


                    default:
                        throw new Error("Can't find appropriate option to generate a view!");

                }

                return view;
            }
        };
});
