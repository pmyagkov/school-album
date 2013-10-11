/*global define*/

define(['backbone'], function (Backbone) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function StudentModel() {
            parent.apply(this, arguments);
        }

    });
});