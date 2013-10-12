define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function LecturesView() {
            BaseView.prototype.constructor.apply(this, arguments);
        }
    });
});