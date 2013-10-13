/* global define */

define(['backbone', 'localStorage', 'BaseCollection', 'StudentModel'],
    function (Backbone, localStorage, BaseCollection, StudentModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function StudentCollection() {
                parent.apply(this, arguments);
            },
            initialize: function (students) {
            },

            comparator: function (student) {
                return student.get("created");
            },

            model: StudentModel,
            localStorage: new Backbone.LocalStorage("StudentCollection"),

            clearNew: function () {
                this.each(function (e) {
                    e.set("isNew", false, {silent: true});
                })
            }


        });
    }
);
