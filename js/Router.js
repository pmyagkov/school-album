/* global Backbone, _*/

var App = App || {};

App.Router = Backbone.Router.extend({
    initialize: function () {
        "use strict";
    },
    routes: (function () {
        "use strict";

        var routes = {
            "students":     "showStudents",
            "students/:i":  "showStudent",

            "lectures":     "showLectures",
            "lectures/:i":  "showLecture"
        };

        // assign default action to do
        routes[""] = routes.students;

        return routes;
    })(),

    // methods of router
    showStudents: function () {
        "use strict";

        App.events.trigger("stateChanged", {layout: "students"});
    },

    showStudent: function (i) {
        "use strict";

        App.events.trigger("stateChanged", {layout: "student", params : {i : i}});
    }

});
