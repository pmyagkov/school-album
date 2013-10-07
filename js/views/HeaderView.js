/* global Backbone, _*/
var App = App || {};

App.HeaderView = App.BaseView.extend({

    constructor: function HeaderView() {
        "use strict";
        App.BaseView.prototype.constructor.apply(this, arguments);
    },

    initialize: function() {
        "use strict";

        App.BaseView.prototype.initialize.apply(this, arguments);

        this.changeCurrent = _.bind(this.changeCurrent, this);

        var model = arguments[0].model;
        model.on("change:current", this.changeCurrent);
    },

    changeCurrent: function (layout) {
        "use strict";

        // add or remove 'current' class from the header title
        this.$(".header__title")[layout.get("isDefault") ? "addClass" : "removeClass"]("header__title_current");

        this.$(".header__links__item").removeClass("header__links__item_current")
            .filter(".header__links__item_" + layout.id).addClass("header__links__item_current");
    }
});
