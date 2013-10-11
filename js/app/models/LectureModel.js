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

        toJSON: function () {
            var attrs = parent.prototype.toJSON.apply(this, arguments);
            attrs.lecturer = this._lecturer.toJSON();

            return attrs;
        }
    });
});
