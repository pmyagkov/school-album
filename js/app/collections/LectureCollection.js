/* global define */

define(['backbone', 'localStorage', 'underscore',
    'BaseCollection', 'LectureModel'],
    function (Backbone, localStorage, _, BaseCollection, LectureModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function LectureCollection() {
                parent.apply(this, arguments);
            },

            model: function (attrs, options) {
                return new LectureModel(attrs, {
                    lecturer: options.lecturers.get(attrs.lecturerId)
                });
            },

            initialize: function () {

            },
            comparator: function (lecture) {
                return lecture.get("date");
            },

            localStorage: new Backbone.LocalStorage("LectureCollection")
        });
    }
);

