/* global define */

define(['backbone', 'localStorage', 'StudentModel'], function (Backbone, localStorage, StudentModel) {
    "use strict";

    return Backbone.Collection.extend({
        model: StudentModel,
        localStorage: new Backbone.LocalStorage("StudentCollection"),
        initialize: function (students) {
            this.fetch();
        },

        save: function () {
            this.each(function (e, i) {
                e.save();
            });
        }
    });
});
