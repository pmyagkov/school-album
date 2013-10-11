/* global define */

define(['backbone', 'localStorage', 'underscore', 'LectureModel', 'LecturerCollection'], function (Backbone, localStorage, _, LectureModel, LecturerCollection) {
    "use strict";

    var parent = Backbone.Collection;
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
});

