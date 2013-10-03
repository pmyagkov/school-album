/* global Backbone, _*/

var App = App || {};

App.Router = Backbone.Router.extend({

    processRoute: function () {
        "use strict";

        var args = Array.prototype.slice.call(arguments);
        var layoutName = arguments[0];

        if (this.appState.layouts.current === layoutName) {
            console.log("Don't need to change state.");
        }
        else {
            console.log("State is needed to be changed. New layout: " + layoutName);

            // we need to clean all the layout first
            _.each(this.appState.layouts.currentViews, function (e, i) {
                e.clean();
            });

            var layout, currentViews = [];
            var layouts = this.appState.layouts;

            if (typeof (layout = layouts[layoutName]) !== "undefined") {
                for (var i = 0; i < layout.views.length; i++) {
                    try {
                        var viewDef = layout.views[i];
                        var view = App.ViewFactory.createView(viewDef.name, viewDef.el, this.appState.data, args.slice(1));
                        currentViews.push(view);
                        view.render();
                    }
                    catch (e) {
                        console.error("Can't create view '" + layout.views[i] + "'!");
                    }
                }
            }

            this.appState.layouts.currentViews = currentViews;
            this.appState.layouts.current = layoutName;
        }
    },

    initialize: function (appState) {
        "use strict";
        var self = this;

        this.appState = appState;

        _.each(appState.layouts, function (e, layoutName) {
            var routeCallback = function () {
                return self.processRoute.apply(self, [layoutName].concat(Array.prototype.slice.call(arguments)));
            };
            self.route(e.route, layoutName, routeCallback);
            if (e.isDefault) {
                self.route("", "default", routeCallback);
            }
        });

    }
});
