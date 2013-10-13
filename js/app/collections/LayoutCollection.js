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

            setCurrentLayout: function (layoutName) {

                var currentLayout;
                this.each(function (e, i) {
                    e.setCurrentLayout(e.id === layoutName);
                    if (e.id === layoutName) {
                        currentLayout = e;
                    }
                });
            },
            getCurrentLayout: function () {
                return this.find(function (e) { return e.get("current");})
            },

            localStorage: new Backbone.LocalStorage("LayoutCollection")
        });
});
