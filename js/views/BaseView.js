/* global Backbone, Handlebars, _*/

var App = App || {};

App.BaseView = Backbone.View.extend({
    template: function () {
        "use strict";

        if (typeof this.constructor.template !== "function") {
            var templateName = App.Utils.toHtmlCase(this.constructor.name);
            this.constructor.template = Handlebars.compile($("#" + templateName).html());
        }

        return this.constructor.template.apply(null, arguments);
    },

    render: function () {
        "use strict";

        var str = this.template(this.model.toJSON());
        this.$el.append(str);

        return this;
    }

});
