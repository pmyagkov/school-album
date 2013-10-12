define(['backbone'], function (Backbone) {
    return Backbone.Collection.extend({

        initialize: function () {
            "use strict";

        },

        save: function () {
            "use strict";

            this.each(function (e) {
                e.save();
            })
        }
    });
});