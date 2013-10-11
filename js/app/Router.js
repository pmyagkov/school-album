/* global define*/

define(['backbone', 'underscore', 'jquery'],
    function (Backbone, _, $) {
        "use strict";

        var _appState;
        var _viewFactory;

        return Backbone.Router.extend({

            initialize: function (appState, viewFactory) {
                console.info("Router.initialize started");


                var self = this;

                _appState = appState;
                _viewFactory = viewFactory;

                _appState.getLayouts().each(function (e) {
                    var routeCallback = function () {
                        return self.processRoute.apply(self, [e.id].concat(Array.prototype.slice.call(arguments)));
                    };

                    self.route(e.get("route"), e.id, routeCallback);
                    if (e.get("isDefault")) {
                        self.route("", "default", routeCallback);
                    }
                });

                this.startHistory();

                console.info("Router.initialize finished");
            },

            startHistory: function () {
                console.info("Router.startHistory started");
                // this is because of IE hash navigation is based on iframe
                if (!Backbone.History.started) {
                    $(function () {
                        Backbone.history.start();
                    });
                }
                console.info("Router.startHistory finished");
            },

            processRoute: function (layoutName) {
                console.log("Router.processRoute started");

                var self = this;
                var args = Array.prototype.slice.call(arguments);

                console.log("State is needed to be changed. New layout: " + layoutName);

                // I don't need to reinstantiate views again

                var renderedViews = _appState.getCurrentViews();
                var viewsToClean = renderedViews.slice();

                var viewsToRender = _appState.getLayout(layoutName).getViews();
                /*var viewsToRender = _.reject(layoutViews, function (e, i) {
                    return _.any(renderedViews, function (r) {
                        return r.getId() === e.id && r.getElementSelector() === e.el;
                    });
                });
*/
  /*              viewsToClean = _.reject(renderedViews, function (r, i) {
                    return _.any(layoutViews, function (e) {
                        return r.getId() === e.id && r.getElementSelector() === e.el;
                    });
                });*/

                // we need to clean all the layout first
                _.each(viewsToClean, function (e, i) {
                    e.destroy();
                    // remove cleaned view from rendered list
                    renderedViews = _.reject(renderedViews, function (r, i) {
                        return r.cid === e.cid;
                    });
                });

                var layout, currentViews = [];
                var layouts = _appState.getLayouts();

                _.each(viewsToRender, function (e, i) {
                    try {
                        var view = _viewFactory.createView(e.id, e.el, _appState, args.slice(1));
                        currentViews.push(view);
                        view.on("navigate", function (fragment) {
                            self.navigate(fragment, {trigger: true});
                        });
                    }
                    catch (exc) {
                        console.error("Can't create view '" + e.id + "'! " + exc);
                    }
                });

                jQuery(function () {
                    _.each(currentViews, function (e, i) {
                        e.render();
                    });
                });

                _appState.setCurrentViews(renderedViews.concat(currentViews));
                _appState.setCurrentLayout(layoutName);

                console.log("Router.processRoute finished");

            }
        });
    });
