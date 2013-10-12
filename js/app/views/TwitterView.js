/* global define */
define(['BaseView'], function (BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function TwitterView() {
            parent.prototype.constructor.apply(this, arguments);

        },

        render: function () {
            parent.prototype.render.apply(this, arguments);
            this.renderWidget();
        },

        renderWidget: function () {
            this._$container.append($("<script>", {
                src: (/^http:/.test(document.location) ? 'http' : 'https') + "://platform.twitter.com/widgets.js"
            }));
        }
    });
});
