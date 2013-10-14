define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructorName: "LecturerView",
        constructor: function LecturerView() {
            BaseView.prototype.constructor.apply(this, arguments);
        }
    });
});