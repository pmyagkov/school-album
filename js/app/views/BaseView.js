/* global define */

define(['backbone', 'underscore', 'Utils', 'templates'], function (Backbone, _, Utils, templates) {
    "use strict";

    return Backbone.View.extend({

        initialize: function () {
            if (!this.el) {
                this.el = arguments.length > 0 ? arguments[0].el : undefined;
            }

            if (!_.isFunction(this.constructor.template)) {
                var templateName = Utils.toHtmlCase(this.constructor.name);
                this.constructor.template = templates[templateName.split('-')[0]];
            }

            this.template = this.constructor.template;
        },

        render: function () {
            if (!this.$el.length) {
                this.setElement(this.el);
            }

            var str = this.template(this.model.toJSON());
            this.$el.append(str);

            return this;
        },

        getId: function () {
            var nameRegex = /^\w*(?=View$)/;
            var name = this.constructor.name;
            var match = nameRegex.exec(name);
            if (match && match.length) {
                return match[0].toLowerCase();
            }

            throw new Error("Can't grep name of the view '" + name + "'");
        },

        getElementSelector: function () {
            return this.$el.selector;
        },

        clean: function () {
            this.$el.empty();
        }

    });
});