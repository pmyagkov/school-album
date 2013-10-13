/*global define*/

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function StudentModel() {
            parent.apply(this, arguments);
        },

        initialize: function () {
            this.on("change:links", _.bind(this.normalizeLinks, this));
        },

        normalizeLinks: function () {
            var links = this.get("links");
            _.each(links, function (e, i) {
                if (e && e.indexOf("http") === -1) {
                    links[i] = "http://" + e;
                }
            });
            this.set("links", links);
        }


    });
});