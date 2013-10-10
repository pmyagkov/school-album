/* global define */
define(['underscore', 'BaseView'], function (_, BaseView) {
    "use strict";

    return BaseView.extend({
        constructor: function HeaderView() {
            BaseView.prototype.constructor.apply(this, arguments);
        },

        initialize: function() {
            var self = this;

            BaseView.prototype.initialize.apply(this, arguments);

            this.changeCurrent = _.bind(this.changeCurrent, this);

            var model = arguments[0].model;
            model.on("change:current", this.changeCurrent);

        },

        events: {
            "click .header__links__item" : "navigationClick"

        },

        navigationClick: function (event) {
            var $target = $(event.target);
            if (!$target.is("a")) {
                this.trigger("navigate", $(event.target).find("a").attr("href"));
            }
        },

        changeCurrent: function (layout) {
            this.$(".header__links__item").removeClass("header__links__item_current")
                .filter(".header__links__item_" + layout.id).addClass("header__links__item_current");
        }
    });
});
