/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    return BaseView.extend({
        constructor: function AboutView() {
            BaseView.prototype.constructor.apply(this, arguments);
        }
    });
});
