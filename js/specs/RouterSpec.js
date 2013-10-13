 /* global define, require, describe, it, expect */

require(['sinon', 'backbone', 'Router', 'AppStateController', 'layoutsObj', 'dataObj'],
    function (sinon, Backbone, Router, AppStateController, layoutsObj, dataObj) {
        "use strict";

        beforeEach(function () {
            this.routesArray = [
                {
                    params: ["about"], route: "!/about"
                },
                {
                    params: ["students"], route: "!/students",
                    isDefault: true
                },
                {
                    params: ["student"], route: "!/students/:i"
                }
            ];

            this.appStateController = new AppStateController(layoutsObj, dataObj);
            this.getRoutesStub = sinon.stub(this.appStateController, "getRoutes");
            this.getRoutesStub.returns(this.routesArray);

            this.routerMock = sinon.mock(Router.prototype);
            this.routerMock.expects("startHistory").once();
        });

        afterEach(function () {
            this.routerMock.restore();
            this.appStateController.getRoutes.restore();

            AppStateController.release();
        });

        describe("Router", function () {
            it("should attach to all the described routes and start history", function () {
                var routeSpy = sinon.spy(Router.prototype, "route");

                var router = new Router(this.appStateController);

                expect(routeSpy.calledWith("!/about")).toBeTruthy();
                expect(routeSpy.calledWith("!/students")).toBeTruthy();
                expect(routeSpy.calledWith("!/students/:i")).toBeTruthy();
                expect(routeSpy.calledWith("")).toBeTruthy();

                this.routerMock.verify();
                Router.release();
            });

            it("should notify app state controller about state change", function () {
                var appStateMock = sinon.mock(this.appStateController);
                appStateMock.expects("changeState").withArgs("student", 1).once();

                var router = new Router(this.appStateController);
                router.processRoute("student", 1);

                appStateMock.verify();

                appStateMock.restore();
                Router.release();
            });

            it("should be a singleton", function () {
                var router = new Router(this.appStateController);

                expect(router).toBe(new Router(this.appStateController));

                Router.release();
            })


        });
    });

