define(['backbone'], function (Backbone) {
    return Backbone.Collection.extend({

        initialize: function () {
            "use strict";

        },

        getLatestId: function () {
            "use strict";

            var id = 1;
            this.each(function (e) {
                id = e.id > id ? e.id : id;
            });
            return id;
        },

        save: function () {
            "use strict";

            this.each(function (e) {
                e.save();
            })
        }
    });
});