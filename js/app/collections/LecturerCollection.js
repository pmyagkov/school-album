/* global define */

define(['backbone', 'localStorage', 'underscore',
    'BaseCollection', 'LecturerModel'],
    function (Backbone, localStorage, _, BaseCollection, LecturerModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function LecturerCollection() {
                parent.apply(this, arguments);
            },
            model: LecturerModel,
            initialize: function () {

            },

            addLectures: function (lectures) {
                this.forEach(function (e) {
                    e.addLectures(lectures.where({lecturerId: e.id}));
                });
            },

            localStorage: new Backbone.LocalStorage("LecturerCollection")
        });
    }
);

