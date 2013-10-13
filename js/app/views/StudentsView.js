/* global define */
define(['underscore', 'BaseView'], function (_, BaseView) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function StudentsView() {
            parent.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            parent.prototype.initialize.apply(this, arguments);
        },

        events: {
            "click .entity-list": "click"
        },

        click: function (e) {
            var $target = $(e.target);
            if ($target.is(".entity-list__item_remove") || $target.is(".entity-list__item_remove *")) {
                var $item = $target.closest(".entity-list__item");
                var id = $item.data("id");
                this.model.remove(this.model.get(parseInt(id)));
                $item.remove();

                return false;
            }
        },

        render: function () {
            parent.prototype.render.apply(this, arguments);
            var selector = _.map(this.model.getNewStudents(), function (e) {
                return ".entity-list__item_" + e.id;
            }).join(",");

            this.$(selector).addClass("entity-list__item_colored");
            // clear isNew fields of models
            this.model.clearNewFlag();
        }


    });
});
