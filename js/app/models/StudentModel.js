/*global define*/

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function StudentModel(attrs) {
            parent.apply(this, arguments);
        },

        initialize: function () {
            this.set("links", this._normalizeLinks(this.get("links")));
            this.on("change:links", _.bind(this.normalizeLinks, this));
        },

        _normalizeLinks: function (links) {
            _.each(links, function (e, i) {
                if (e && e.indexOf("http") === -1) {
                    links[i] = "http://" + e;
                }
            });
            return links;
        },
        normalizeLinks: function () {
            this.set("links", this._normalizeLinks(this.get("links")));
        }


    });
});