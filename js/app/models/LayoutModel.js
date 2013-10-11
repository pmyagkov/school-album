/*global define*/

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function LayoutModel() {
            parent.apply(this, arguments);
        },
        initialize: function () {

        },

        isWithTitle: function () {
            return !_.isUndefined(this.get('title'));
        },

        getViews: function () {
            return this.get('views');
        },

        setCurrent: function (value) {
            this.set({"current": value}, {"silent": !value});
        }
    });
});
