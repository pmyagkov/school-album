/*global define*/

define(['backbone'], function (Backbone) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function AboutModel() {
            parent.apply(this, arguments);
        }
    });
});