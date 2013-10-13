/* global define, require, describe, it, expect */

require(['sinon', 'underscore', 'backbone', 'AppStateController',
        'AboutView', 'TwitterView', 'HeaderView', 'StudentView', 'StudentsView'],
    function (sinon, _, Backbone, AppStateController,
        AboutView, TwitterView, HeaderView, StudentView, StudentsView) {
        "use strict";

        function createViews(viewCtors) {
            var self = this;

            _.each(viewCtors, function (viewCtor) {
                var key = viewCtor.name[0].toLowerCase() + viewCtor.name.substr(1);
                self[key] = new viewCtor({model: {on: function () {}}});
            });
        }

        function mockViews(viewCtors, methods) {
            var self = this;
            
            _.each(viewCtors, function (viewCtor) {
                var key = viewCtor.name[0].toLowerCase() + viewCtor.name.substr(1);
                var mockKey = key + "Mock";
                var mock;
                if (!self.hasOwnProperty(mockKey)) {
                    mock = self[mockKey] = sinon.mock(self[key]);
                }
                else {
                    mock = self[mockKey];
                }

                _.each(methods, function (method) {
                    mock.expects(method).once();
                });
            });
        }

        function verifyMocks(viewCtors) {
            var self = this;

            _.each(viewCtors, function (viewCtor) {
                var key = viewCtor.name[0].toLowerCase() + viewCtor.name.substr(1);
                var mockKey = key + "Mock";
                self[mockKey].verify();
            });
        }

        function restoreMocks(viewCtors) {
            var self = this;

            _.each(viewCtors, function (viewCtor) {
                var key = viewCtor.name[0].toLowerCase() + viewCtor.name.substr(1);
                var mockKey = key + "Mock";
                self[mockKey].restore();
            });
        }

        beforeEach(function () {
            this.layoutsObj = [
                {
                    id: "about", route: "!/about", title: "О школе",
                    views: [{id: "header", el: ".header"}, {id: "twitter", el: ".content"}, {id: "about", el: ".content"}],
                    isDefault: true
                },
                {
                    id: "students", route: "!/students", title: "Студенты",
                    views: [{id: "header", el: ".header"}, {id: "students", el: ".content"}]
                },
                {
                    id: "student", route: "!/students/:i(/:command)",
                    views: [{id: "header", el: ".header"}, {id: "student", el: ".content"}]
                }
            ];

            this.dataObj = {
                students: [],
                lectures: [],
                lecturers: []
            }



        });

        afterEach(function () {

        });

        describe("AppStateController", function () {
            "use strict";

            it("should return available routes correctly", function () {
                AppStateController.release();
                var appStateController = new AppStateController(this.layoutsObj, this.dataObj);
                var routes = appStateController.getRoutes();
                
                expect(routes[0].route).toBe("!/about");
                expect(routes[0].isDefault).toBeTruthy();
                expect(routes[0].params.length).toBe(1);
                expect(routes[0].params[0]).toBe("about");

                expect(routes[1].route).toBe("!/students");
                expect(routes[1].isDefault).toBeFalsy();
                expect(routes[1].params.length).toBe(1);
                expect(routes[1].params[0]).toBe("students");

                expect(routes[2].route).toBe("!/students/:i(/:command)");
                expect(routes[2].isDefault).toBeFalsy();
                expect(routes[2].params.length).toBe(1);
                expect(routes[2].params[0]).toBe("student");

                AppStateController.release();
            });

            it("should create new views and subscribe on their event", function () {
                AppStateController.release();
                var appStateController = new AppStateController(this.layoutsObj, this.dataObj);
                var appStateMock = sinon.mock(AppStateController.prototype);

                var views = [AboutView, TwitterView, HeaderView];
                createViews.call(this, views);
                mockViews.call(this, views, ["render"]);

                appStateMock.expects("constructView").withArgs("header", ".header").returns(this.headerView).once();
                appStateMock.expects("constructView").withArgs("twitter", ".content").returns(this.twitterView).once();
                appStateMock.expects("constructView").withArgs("about", ".content").returns(this.aboutView).once();

                appStateMock.expects("subscribe").withArgs(this.headerView);
                appStateMock.expects("subscribe").withArgs(this.twitterView);
                appStateMock.expects("subscribe").withArgs(this.aboutView);

                appStateController.changeState("about");
                appStateMock.verify();

                verifyMocks.call(this, views);
                restoreMocks.call(this, views);

                AppStateController.release();
            });

            it("should destroy old views and unsubscribe from them", function () {
                AppStateController.release();
                var appStateController = new AppStateController(this.layoutsObj, this.dataObj);
                var appStateMock = sinon.mock(AppStateController.prototype);

                var views = [AboutView, TwitterView, HeaderView, StudentsView];
                createViews.call(this, views);
                mockViews.call(this, views, ["render"]);
                this.headerViewMock.expects("render").once();

                appStateMock.expects("constructView").withArgs("header", ".header").returns(this.headerView).twice();
                appStateMock.expects("constructView").withArgs("twitter", ".content").returns(this.twitterView).once();
                appStateMock.expects("constructView").withArgs("about", ".content").returns(this.aboutView).once();
                appStateMock.expects("constructView").withArgs("students", ".content").returns(this.studentsView).once();

                appStateMock.expects("subscribe").withArgs(this.headerView).twice();
                appStateMock.expects("unsubscribe").withArgs(this.headerView).once();
                appStateMock.expects("subscribe").withArgs(this.twitterView).once();
                appStateMock.expects("unsubscribe").withArgs(this.twitterView).once();
                appStateMock.expects("subscribe").withArgs(this.aboutView).once();
                appStateMock.expects("unsubscribe").withArgs(this.aboutView).once();
                appStateMock.expects("subscribe").withArgs(this.studentsView).once();


                appStateController.changeState("about");
                appStateController.changeState("students");
                appStateMock.verify();

                verifyMocks.call(this, views);
                restoreMocks.call(this, views);


                AppStateController.release();
            });
        })
    }
);