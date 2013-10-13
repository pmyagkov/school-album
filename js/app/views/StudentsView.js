/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function StudentsView() {
            parent.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            parent.prototype.initialize.apply(this, arguments);
        },

        render: function () {
            parent.prototype.render.apply(this, arguments);
            // clear isNew fields of models
            this.model.clearNew();
        }

    });
});
