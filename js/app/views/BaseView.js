/* global define */

define(['backbone', 'underscore', 'Utils', 'templates', 'helpers'], function (Backbone, _, Utils, templates, Handlebars) {
    "use strict";

    return Backbone.View.extend({

        initialize: function (options) {
            if (!this.el) {
                this.el = arguments.length > 0 ? arguments[0].el : undefined;
            }

            var templateName = Utils.extractViewName(this.constructor.name);
            if (options && options.command) {
                this._command = options.command === "add" ? "edit" : options.command;
                templateName += this._command[0].toUpperCase() + this._command.substr(1);
            }


            // caching of template
            if (!this.constructor.templates) {
                this.constructor.templates = [];
            }
            var template = this.constructor.templates[this._command || ""];
            if (_.isFunction(template)) {
                this.template = template;
            }
            else {
                this.template = templates[templateName];
                // push new template to the cache
                this.constructor.templates.push(this.template);
            }
        },

        render: function () {
            if (!this.$el.length) {
                this.setElement(this.el);
            }

            if (this._$container) {
                this._$container.remove();
            }

            var str = this.template(this.model ? this.model.toJSON() : undefined);
            this._$container = $(str);
            this.$el.append(this._$container);

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
        },

        destroy: function () {
            if (this.model) {
                this.model.off(null, null, this);
            }

            this.clean();
            this.$el.off();
            this.off();
        }



    });
});