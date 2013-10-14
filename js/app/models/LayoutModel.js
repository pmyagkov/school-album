/*global define*/

define(['backbone', 'underscore'], function (Backbone, _) {
    "use strict";

    var parent = Backbone.Model;

    return parent.extend({
        constructor: function LayoutModel() {
            parent.apply(this, arguments);
        },
        initialize: function () {

        },

        isWithTitle: function () {
            return !_.isUndefined(this.get('title'));
        },

        getViews: function () {
            return this.get('views');
        },

        setCurrentLayout: function (value) {
            this.set({"current": value}, {"silent": !value});
        },

        getTransition: function (event) {
            var transition;
            if (transition = this.get("transitions")[event]) {
                return transition;
            }
            else {
                throw new Error("Can't find transition for layout " + this.id + " for event " + event);
            }
        }
    });
});
