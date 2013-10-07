/* global Backbone, Handlebars, _*/

var App = App || {};

App.BaseView = Backbone.View.extend({

    initialize: function () {
        "use strict";

        if (!this.el) {
            this.el = arguments.length > 0 ? arguments[0].el : undefined;
        }

        if (!_.isFunction(this.constructor.template)) {
            var templateName = App.Utils.toHtmlCase(this.constructor.name);
            this.constructor.template = App.templates[templateName.split('-')[0]];
        }

        this.template = this.constructor.template;
    },

    render: function () {
         "use strict";

        if (!this.$el.length) {
            this.setElement(this.el);
        }

        var str = this.template(this.model.toJSON());
        this.$el.append(str);

        return this;
    },

    getId: function () {
        "use strict";

        var nameRegex = /^\w*(?=View$)/;
        var name = this.constructor.name;
        var match = nameRegex.exec(name);
        if (match && match.length) {
            return match[0].toLowerCase();
        }

        throw new Error("Can't grep name of the view '" + name + "'");
    },

    getElementSelector: function () {
        "use strict";

        return this.$el.selector;
    },

    clean: function () {
        "use strict";

        this.$el.empty();
    }

});
