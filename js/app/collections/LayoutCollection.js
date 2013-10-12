/*global define*/

define(['backbone', 'localStorage', 'BaseCollection', 'LayoutModel'],
    function (Backbone, localStorage, BaseCollection, LayoutModel) {
        "use strict";

        var parent = BaseCollection;
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
