/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    return BaseView.extend({
        constructor: function StudentView() {
            BaseView.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            BaseView.prototype.initialize.apply(this, arguments);
        }
    });
});

