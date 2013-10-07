/* global Backbone, _*/

var App = App || {};

App.Router = Backbone.Router.extend({

    processRoute: function () {
        "use strict";

        var appState = this.appState;
        
        var args = Array.prototype.slice.call(arguments);
        var layoutName = arguments[0];

        if (appState.getCurrentLayout() === layoutName) {
            console.log("Don't need to change state.");
        }
        else {
            console.log("State is needed to be changed. New layout: " + layoutName);

            // I don't need to reinstantiate views again

            var renderedViews = appState.getCurrentViews();
            var viewsToClean = renderedViews.slice();

            var layoutViews = appState.layouts.get(layoutName).getViews();
            var viewsToRender = _.reject(layoutViews, function (e, i) {
                return _.any(renderedViews, function (r) {
                    return r.getId() === e.id && r.getElementSelector() === e.el;
                });
            });

            viewsToClean = _.reject(renderedViews, function (r, i) {
                return _.any(layoutViews, function (e) {
                    return r.getId() === e.id && r.getElementSelector() === e.el;
                });
            });

            // we need to clean all the layout first
            _.each(viewsToClean, function (e, i) {
                e.clean();
                // remove cleaned view from rendered list
                renderedViews = _.reject(renderedViews, function (r, i) {
                    return r.cid === e.cid;
                });
            });

            var layout, currentViews = [];
            var layouts = appState.layouts;

            _.each(viewsToRender, function (e, i) {
                try {
                    var view = App.ViewFactory.createView(e.id, e.el, appState, args.slice(1));
                    currentViews.push(view);
                }
                catch (exc) {
                    console.error("Can't create view '" + e + "'! " + exc);
                }
            });

            appState.setCurrentViews(renderedViews.concat(currentViews));
            appState.setCurrentLayout(layoutName);

            jQuery(function() {
                _.each(currentViews, function (e, i) {
                    e.render();
                });
            });


        }
    },

    initialize: function (appState) {
        "use strict";
        var self = this;

        this.appState = appState;

        appState.layouts.each(function (e) {
            var routeCallback = function () {
                return self.processRoute.apply(self, [e.id].concat(Array.prototype.slice.call(arguments)));
            };

            self.route(e.get("route"), e.id, routeCallback);
            if (e.get("isDefault")) {
                self.route("", "default", routeCallback);
            }
        });

        Backbone.history.start();

    }
});
