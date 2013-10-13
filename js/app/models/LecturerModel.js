/* global define */

define(['relational', 'underscore', 'LectureModel', 'LectureCollection'], function (Backbone, _, LectureModel, LectureCollection) {
    "use strict";

    var parent = Backbone.RelationalModel;

    return parent.extend({
        relations: [
            {
                type: "HasMany",
                key: "lectures",
                relatedModel: LectureModel,
                collectionType: LectureCollection,
                reverseRelation: {
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

        addLectures: function (lectures) {
            if (!this._lectures) {
                this._lectures = lectures;
            }
        },

        getLectures: function () {
            return this._lectures;
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
