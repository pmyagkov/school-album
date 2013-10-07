/* global Backbone, Handlebars */
var App = App || {};
App.StudentsView = App.BaseView.extend({

    constructor: function StudentsView() {
        "use strict";
        App.BaseView.prototype.constructor.apply(this, arguments);
    },
    initialize: function () {
        "use strict";

        App.BaseView.prototype.initialize.apply(this, arguments);
    }
});
