/* global define */

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function LecturerModel() {
            parent.apply(this, arguments);
        },


        initialize: function (attrs) {
            if (!attrs.sex) {
                this.set("sex", false);
            }
        }
    });
});
