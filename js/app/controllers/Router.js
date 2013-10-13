/* global define*/

define(['backbone', 'underscore', 'jquery'],
    function (Backbone, _, $) {
        "use strict";

        
        var _instance;

        var parent = Backbone.Router;

        var Router = parent.extend({
            // singleton realization
            constructor: function Router(appStateController) {
                console.info("---Router.constructor started");

                if (!_instance) {
                    _instance = this;

                    this._appStateController = appStateController;
                    parent.prototype.constructor.apply(this, arguments);
                }

                console.info("---Router.constructor finished");
                return _instance;
            },

            initialize: function () {
                console.info("---Router.initialize started");

                var self = this;

                // get available routes from the controller for registration
                var routesObj = this._appStateController.getRoutes();
                _.each(routesObj, function (e) {
                    var routeCallback = function () {
                        return self.processRoute.apply(self, e.params.concat(Array.prototype.slice.call(arguments)));
                    };
                    self.route(e.route, e.params[0], routeCallback);
                    if (e.isDefault) {
                        self.route("", "default", routeCallback);
                    }
                });

                this.subscribe();
                this.startHistory();

                console.info("---Router.initialize finished");
            },

            subscribe: function () {
                this._appStateController.on("navigate", _.bind(this.processNavigation, this));
            },

            processNavigation: function (url) {
                this.navigate(url, {trigger: true});
            },

            startHistory: function () {
                console.info("---Router.startHistory started");

                if (!Backbone.History.started) {
                    // this is because of IE hash navigation is based on iframe
                    $(function () {
                        Backbone.history.start();
                    });
                }
                console.info("---Router.startHistory finished");
            },

            processRoute: function () {
                console.info("---Router.processRoute started");
                var args = Array.prototype.slice.call(arguments);

                this._appStateController.changeState.apply(this._appStateController, args);

                console.log("---Router.processRoute finished");

            }
        });

        Router.prototype.constructor.release = function () {
            _instance = undefined;
        }

        return Router;
    });
