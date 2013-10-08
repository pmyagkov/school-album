/* global define*/

define(['backbone', 'underscore', 'ViewFactory', 'HeaderView'],
    function (Backbone, _, ViewFactory, HeaderView) {
    "use strict";

    var _appState;

    return Backbone.Router.extend({
        processRoute: function () {

            var args = Array.prototype.slice.call(arguments);
            var layoutName = arguments[0];

            if (_appState.getCurrentLayout() === layoutName) {
                console.log("Don't need to change state.");
            }
            else {
                console.log("State is needed to be changed. New layout: " + layoutName);

                // I don't need to reinstantiate views again

                var renderedViews = _appState.getCurrentViews();
                var viewsToClean = renderedViews.slice();

                var layoutViews = _appState.getLayout(layoutName).getViews();
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
                var layouts = _appState.getLayouts();

                _.each(viewsToRender, function (e, i) {
                    try {
                        var view = ViewFactory.createView(e.id, e.el, _appState, args.slice(1));
                        currentViews.push(view);
                    }
                    catch (exc) {
                        console.error("Can't create view '" + e + "'! " + exc);
                    }
                });

                _appState.setCurrentViews(renderedViews.concat(currentViews));
                _appState.setCurrentLayout(layoutName);

                jQuery(function() {
                    _.each(currentViews, function (e, i) {
                        e.render();
                    });
                });


            }
        },

        initialize: function (appState) {
            var self = this;

            _appState = appState;

            _appState.getLayouts().each(function (e) {
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
});
