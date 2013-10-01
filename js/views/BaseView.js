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

        if (!App.BaseView.renderedViews) {
            App.BaseView.renderedViews = [];
        }

        var str = this.template(this.model.toJSON());
        if (_.any(App.BaseView.renderedViews, function (e, i) {
            return e !== this;
        })) {
            this.$el.append(str);
        }
        else {
            this.$el.html(str);
        }

        if (!_.any(App.BaseView.renderedViews, function (e, i) {
            return e === this;
        })) {
            App.BaseView.renderedViews.push(this);
        }

        return this;
    }

});
