/* global define */

define(['backbone', 'localStorage', 'StudentModel'], function (Backbone, localStorage, StudentModel) {
    "use strict";

    var parent = Backbone.Collection;
    return parent.extend({
        constructor: function StudentCollection() {
            parent.apply(this, arguments);
        },

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
