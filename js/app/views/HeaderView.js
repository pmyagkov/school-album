/* global define */
define(['jquery', 'underscore', 'BaseView'], function ($, _, BaseView) {
    "use strict";

    return BaseView.extend({
        constructorName: "HeaderView",
        constructor: function HeaderView() {
            BaseView.prototype.constructor.apply(this, arguments);
            this._wasRendered = false;
            this._currentLayout = "";
        },

        initialize: function() {
            var self = this;

            BaseView.prototype.initialize.apply(this, arguments);

            this.changeCurrent = _.bind(this.changeCurrent, this);

            var model = arguments[0].model;
            model.on("change:current", this.changeCurrent, this);

        },

        render: function () {
            this._wasRendered = true;

            $(".content-loading").hide();
            BaseView.prototype.render.apply(this, arguments);

            var currentLayout = this.model.getCurrentLayout();
            this.changeCurrent(currentLayout);
        },

        events: {
            "click .header__links__item" : "navigationClick"

        },

        navigationClick: function (event) {
            var $target = $(event.target);
            if (!$target.is("a")) {
                this.trigger("navigate", $target.closest(".header__links__item").data("layout"));
            }
        },

        changeCurrent: function (layout) {
            $(document).scrollTop(0);

            if (this._wasRendered) {
                var $curr = this.$(".header__links__item_" + layout.id);
                var $inks = this.$(".header__links__item").removeClass("header__links__item_current");
                if ($curr.length) {
                    $inks.filter(".header__links__item_" + layout.id).addClass("header__links__item_current");
                }
                else {
                    var parentLayout = this.model.get(layout.get("parent"));
                    $inks.filter(".header__links__item_" + parentLayout.id).addClass("header__links__item_current");
                }
            }
        }
    });
});
