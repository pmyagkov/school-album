define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructorName: "LectureView",
        constructor: function LectureView() {
            BaseView.prototype.constructor.apply(this, arguments);
        }
    });
});