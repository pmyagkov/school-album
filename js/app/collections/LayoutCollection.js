/*global define*/

define(['backbone', 'LayoutModel'], function (Backbone, LayoutModel) {
    "use strict";

    return Backbone.Collection.extend({
        model: LayoutModel,
        initialize: function () {

        },

        setCurrent: function (layoutName) {

            var currentLayout;
            this.each(function (e, i) {
                e.setCurrent(e.id === layoutName);
                if (e.id === layoutName) {
                    currentLayout = e;
                }
            });
        }
    });
});
