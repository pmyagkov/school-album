/* global define */

define(['relational', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.RelationalModel;
    return parent.extend({
        relations: [
            {includeInJson: true}
        ],
        constructor: function LectureModel(lectureObj) {
            parent.apply(this, arguments);
        },

        initialize: function (lectureObj) {
            this.set("date", new Date(Date.parse(this.get("dateString"))));
        },

        toJSON: function () {
            var self = this;

            var attrs = parent.prototype.toJSON.apply(this, arguments);
            if(!_.isNumber(attrs)) {
                attrs.otherLectures = _(this.get("lecturer").getLectures()).chain()
                    .reject(function (e) { return e.id === self.id; })
                    .map(function (e) { return e.toJSON(); }).value();
            }


            return attrs;
        }
    });
});
