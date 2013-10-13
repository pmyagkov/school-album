/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function LecturersView() {
            parent.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            parent.prototype.initialize.apply(this, arguments);
        }
    });
});
