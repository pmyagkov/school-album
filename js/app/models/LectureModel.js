/* global define */

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;
    return parent.extend({
        constructor: function LectureModel(lectureObj, options) {
            parent.apply(this, arguments);

            this._lecturer = options.lecturer;

        },

        initialize: function (lectureObj) {
            this.set("date", new Date(Date.parse(this.get("dateString"))));
        },

        toJSON: function (shallow) {
            var self = this;

            var attrs = parent.prototype.toJSON.apply(this, arguments);
            if (!shallow) {
                attrs.lecturer = this._lecturer.toJSON();
                attrs.otherLectures = _(this._lecturer.getLectures()).chain()
                    .reject(function (e) { return e.id === self.id; })
                    .map(function (e) { return e.toJSON(true); }).value();
            }


            return attrs;
        }
    });
});
