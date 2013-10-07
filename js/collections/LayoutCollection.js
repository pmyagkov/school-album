/* global Backbone, _*/
var App = App || {};

App.LayoutCollection = Backbone.Collection.extend({
    model: App.LayoutModel,
    initialize: function () {
        "use strict";

    },

    setCurrent: function (layoutName) {
        "use strict";

        var currentLayout;
        this.each(function (e, i) {
            e.setCurrent(e.id === layoutName);
            if (e.id === layoutName) {
                currentLayout = e;
            }
        });
    }

});