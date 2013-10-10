/* global define, require, describe, it, expect */

define(['sinon', 'backbone', 'Router', 'AppState', 'LayoutCollection', 'StudentModel', 'StudentView', 'HeaderView', 'AboutModel', 'AboutView', 'ViewFactory'],
    function (sinon, Backbone, Router, AppState, LayoutCollection, StudentModel, StudentView, HeaderView, AboutModel, AboutView, ViewFactory) {
        "use strict";

        beforeEach(function () {
            this.layouts = new LayoutCollection([
                {
                    id: "main", route: "!/main", title: "О школе",
                    views: [
                        {id: "header", el: ".header"},
                        {id: "about", el: ".content"}
                    ]
                },
                {
                    id: "students", route: "!/students", title: "Студенты",
                    views: [
                        {id: "header", el: ".header"},
                        {id: "students", el: ".content"}
                    ],
                    isDefault: true
                },
                {
                    id: "student", route: "!/students/:i",
                    views: [
                        {id: "header", el: ".header"},
                        {id: "student", el: ".content"}
                    ]
                }
            ]);

            this.appState = new AppState();
            this.getLayoutsStub = sinon.stub(this.appState, "getLayouts");
            this.getLayoutStub = sinon.stub(this.appState, "getLayout");

            this.getLayoutsStub.returns(this.layouts);
            this.getLayoutStub.withArgs("student").returns(this.layouts.get("student"));
            this.getLayoutStub.withArgs("main").returns(this.layouts.get("main"));

            this.headerView = new HeaderView({model: this.layouts, el: ".header"});
            this.aboutView = new AboutView({model: new AboutModel(), el: ".content"});
            this.studentView = new StudentView({model: new StudentModel(), el: ".content"});

            this.headerViewMock = sinon.mock(this.headerView);
            this.aboutViewMock = sinon.mock(this.aboutView);
            this.studentViewMock = sinon.mock(this.studentView);

            this.createViewStub = sinon.stub(ViewFactory, "createView");
            this.createViewStub.withArgs("header").returns(this.headerView);
            this.createViewStub.withArgs("about").returns(this.aboutView);
            this.createViewStub.withArgs("student").returns(this.studentView);

            this.appStateMock = sinon.mock(AppState.prototype);

            this.routerMock = sinon.mock(Router.prototype);
            this.routerMock.expects("startHistory").once();
        });

        afterEach(function () {
            this.createViewStub.restore();
            this.appStateMock.restore();

            this.getLayoutsStub.restore();
            this.getLayoutStub.restore();

            this.headerViewMock.restore();
            this.aboutViewMock.restore();
            this.studentViewMock.restore();

            this.routerMock.restore();
        });

        describe("Router", function () {
            it("should attach to all the described routes and start history", function () {
                var routeSpy = sinon.spy(Router.prototype, "route");

                var router = new Router(this.appState, ViewFactory);

                expect(routeSpy.calledWith("!/main", "main")).toBeTruthy();
                expect(routeSpy.calledWith("!/students", "students")).toBeTruthy();
                expect(routeSpy.calledWith("!/students/:i", "student")).toBeTruthy();
                expect(routeSpy.calledWith("", "default")).toBeTruthy();

                this.routerMock.verify();
            });

            it("should render all the views assigned to a specific route", function () {
                this.headerViewMock.expects("render").once();
                this.studentViewMock.expects("render").once();
                this.headerViewMock.expects("on").once();
                this.studentViewMock.expects("on").once();

                this.appStateMock.expects("setCurrentLayout").withArgs("student");
                this.appStateMock.expects("setCurrentViews").withArgs([this.headerView, this.studentView]);


                var router = new Router(this.appState, ViewFactory);
                router.processRoute("student", [1]);

                this.headerViewMock.verify();
                this.studentViewMock.verify();

            });

            it("should replace old views with new ones", function () {
                var router = new Router(this.appState, ViewFactory);

                this.aboutViewMock.expects("render").once();
                this.studentViewMock.expects("destroy").once();
                this.headerViewMock.expects("render").once();

                router.processRoute("student", [1]);
                router.processRoute("main");

                this.headerViewMock.verify();
                this.aboutViewMock.verify();
                this.studentViewMock.verify();
            });

        });
    });

