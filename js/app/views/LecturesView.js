define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructorName: "LecturesView",
        constructor: function LecturesView() {
            BaseView.prototype.constructor.apply(this, arguments);
        },

        events: {
            "input .search-control": "doSearch"
        }
    });
});