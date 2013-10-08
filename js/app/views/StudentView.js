/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    return BaseView.extend({
        constructor: function StudentsView() {
            BaseView.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            BaseView.prototype.initialize.apply(this, arguments);
        }
    });
});

