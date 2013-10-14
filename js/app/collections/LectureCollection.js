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

            search: function (query) {
                query = query.toLowerCase();
                var ids = [];
                this.each(function (e) {
                    if ((e.get("lecturer").get("firstName") + " " + e.get("lecturer").get("lastName")).toLowerCase().indexOf(query) > -1
                        || e.get("title").toLowerCase().indexOf(query) > -1) {
                        ids.push(e.id);
                    }
                })
                return ids;
            },

            localStorage: new Backbone.LocalStorage("LectureCollection")
        });
    }
);

