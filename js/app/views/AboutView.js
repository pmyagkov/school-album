/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    return BaseView.extend({
        constructorName: "AboutView",
        constructor: function AboutView() {
            BaseView.prototype.constructor.apply(this, arguments);
        }
    });
});
