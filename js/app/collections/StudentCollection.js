/* global define */

define(['backbone', 'localStorage', 'BaseCollection', 'StudentModel'],
    function (Backbone, localStorage, BaseCollection, StudentModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function StudentCollection() {
                parent.apply(this, arguments);
            },

            model: StudentModel,
            localStorage: new Backbone.LocalStorage("StudentCollection"),
            initialize: function (students) {
                this.fetch();
            }
        });
    }
);
