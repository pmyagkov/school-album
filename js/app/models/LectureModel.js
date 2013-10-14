/* global define */

define(['relational', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.RelationalModel;
    return parent.extend({
        constructor: function LectureModel(lectureObj) {
            parent.apply(this, arguments);
        },

        initialize: function () {
            this.set("date", new Date(Date.parse(this.get("dateString"))));

        },

        toJSON: function () {
            var self = this;

            var attrs = parent.prototype.toJSON.apply(this, arguments);

            return attrs;
        }
    });
});
