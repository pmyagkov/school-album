/*global define*/

define(['backbone', 'localStorage', 'LayoutModel'], function (Backbone, localStorage, LayoutModel) {
    "use strict";

    var parent = Backbone.Collection;
    return parent.extend({
        constructor: function LayoutCollection() {
            parent.apply(this, arguments);
        },
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
        },

        localStorage: new Backbone.LocalStorage("LayoutCollection")
    });
});
