/* global Backbone, _*/
var App = App || {};

App.LayoutModel = Backbone.Model.extend({
    initialize: function () {
        "use strict";

    },

    isWithTitle: function () {
        "use strict";

         return !_.isUndefined(this.get('title'));
    },

    getViews: function () {
        "use strict";

        return this.get('views');
    },

    setCurrent: function (value) {
        "use strict";

        this.set({"current": value}, {"silent": !value});
    }
});
