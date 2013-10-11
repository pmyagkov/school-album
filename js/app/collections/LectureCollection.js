/* global define */

define(['backbone', 'localStorage', 'underscore',
    'BaseCollection', 'LectureModel'],
    function (Backbone, localStorage, _, BaseCollection, LectureModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function LectureCollection(lectureArray, options) {
                parent.apply(this, arguments);
                this._lecturers = options.lecturers;
            },

            model: function (attrs, options) {
                return new LectureModel(attrs, {
                    lecturer: options.lecturers.get(attrs.lecturerId)
                });
            },

            initialize: function (lectureArray, lecturerCollection) {

            },
            comparator: function (lecture) {
                return lecture.get("date");
            },

            localStorage: new Backbone.LocalStorage("LectureCollection")
        });
    }
);

