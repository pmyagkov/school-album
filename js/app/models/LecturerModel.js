/* global define */

define(['relational', 'underscore', 'LectureModel', 'LectureCollection'], function (Backbone, _, LectureModel, LectureCollection) {
    "use strict";

    var parent = Backbone.RelationalModel;

    return parent.extend({
        relations: [
            {
                type: "HasMany",
                key: "lectures",
                includeInJSON: true,
                relatedModel: LectureModel,
                collectionType: LectureCollection,
                reverseRelation: {
                    includeInJson: true,
                    key: "lecturer"
                }
            }
        ],
        constructor: function LecturerModel() {
            parent.apply(this, arguments);
        },


        initialize: function (attrs) {
            if (!attrs.sex) {
                this.set("sex", false);
            }
        },

        getLectures: function () {
            return this.get("lectures");
        }/*,

        toJSON: function () {
            var attrs = parent.prototype.toJSON.apply(this, arguments);
            attrs.lectures = [];
            _.each(this._lectures, function (e, i) {
                // call toJSON with 'true' to get a shallow copy without link to the lecturer (to avoid circular refs)
                attrs.lectures.push(e.toJSON(true));
            });

            return attrs;
        }*/
    });
});
