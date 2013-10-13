/* global define */

define([
    'backbone', 'underscore',
    'AboutModel',
    'StudentModel',
    'StudentCollection',
    'LayoutCollection',

    'LectureModel',
    'LectureCollection',

    'LecturerModel',
    'LecturerCollection',

    // views
    'HeaderView',
    'TwitterView',
    'AboutView',
    'StudentView', 'StudentsView',
    'LectureView', 'LecturesView',
    'LecturerView', 'LecturersView'
], function (Backbone, _,
             AboutModel,
             StudentModel,
             StudentCollection,
             LayoutCollection,

             LectureModel,
             LectureCollection,

             LecturerModel,
             LecturerCollection,

             HeaderView,
             TwitterView,
             AboutView,
             StudentView, StudentsView,
             LectureView, LecturesView,
             LecturerView, LecturersView

    ) {

    "use strict";

    var fetchCollection = function (collectionCtor, values, options) {
        var result = new collectionCtor();
        var localStorageEmpty = false;
        result.fetch({
            success: function () {
                if (!result.length) {
                    localStorageEmpty = true;
                    result.reset(values, _.extend(options ? options : {}, {silent: true}));
                    if (localStorageEmpty) {
                        result.save();
                    }
                }
            },
            error: function (e) {
                console.error(collectionCtor.name + ".fetch failure: ", e);
            }
        });

        return result;
    };

    var _instance;

    var ctor = function AppStateController(layoutsObj, dataObj) {
        if (!_instance) {

            // prepare models for initialization
            var lecturersArray = _.map(dataObj.lecturers, function (lecturer) {
                var extended = _.extend(lecturer, {lectures: _.where(dataObj.lectures, {lecturerId: lecturer.id})});

                return new LecturerModel(extended);
            });

            var lecturers = new LecturerCollection(lecturersArray);
            var lectures = new LectureCollection(_(lecturersArray).chain().map(function (e) {
                return e.get("lectures").models;
            }).flatten().uniq().value());

            this._layouts = new LayoutCollection(layoutsObj);
            this._data = {
                about: new AboutModel(dataObj.about),
                students: fetchCollection(StudentCollection, dataObj.students),
                lectures: lectures,
                lecturers: lecturers
            };

            this._renderedViews = [];
            this._currentLayout = "";

            // mix events to implement link between the Router and this controller
            _instance = _.extend(this, Backbone.Events);
        }

        return _instance;

    };

    ctor.release = function () {
        _instance = undefined;
        Backbone.Relational.store.reset();
    };

    ctor.prototype = {
        subscribe: function (view) {
            var self = this;
            view.on("navigate", function (layoutName) { return self.navigated("navigate", layoutName);}, this);
            view.on("save", function (model) { return self.saved("save", model);}, this);
            view.on("discard", function (model) { return self.discarded("discard");}, this);
        },

        unsubscribe: function (view) {
            // detach all the handlers in the current context
            view.off(null, null, this);
        },

        navigated: function (event, layoutName) {
            var self = this;
            if (layoutName) {
                var layout = this._layouts.get(layoutName);
                if (layout) {
                    self.trigger("navigate", layout.get("route"));
                }
            }
        },

        saved: function (event, student) {

            if (!student.id) {
                var latestId = this._data.students.getLatestId();
                student.set("id", latestId + 1);
            }

            this._data.students.create(student);
            student.set("isNew", true);
            this.trigger("navigate", this.getRoute(this._layouts.getCurrentLayout().getTransition(event)));
        },

        discarded: function (event) {
            this.trigger("navigate", this.getRoute(this._layouts.getCurrentLayout().getTransition(event)));
        },

        constructView: function (name, el, params) {
            var self = this;

            var view;
            switch (name) {
                case "header":
                    view = new HeaderView({model: self._layouts, el: el});
                    break;

                case "about":
                    view = new AboutView({model: self._data.about, el: el});
                    break;

                case "student":
                    var student;

                    var command;
                    if (_.isNaN(parseInt(params[0]))) {
                        // this means we want to construct a student from scratch
                        student = new StudentModel();
                        command = params[0];
                    }
                    else {
                        student = self._data.students.get(params[0]);
                        if (typeof student === "undefined") {
                            throw new Error("A student with id '" + params[0] + "' doesn't exist in the collection");
                        }
                        command = params[1];
                    }

                    view = new StudentView({model: student, el: el, command: command});
                    break;

                case "students":
                    view = new StudentsView({model: self._data.students, el: el});
                    break;


                case "lecture":
                    if (!params.length) {
                        throw new Error("Index of the lecture is not passed to ViewFactory to construct 'lecture' view");
                    }

                    var lecture = self._data.lectures.get(params[0]);
                    if (typeof lecture === "undefined") {
                        throw new Error("A lecture with id '" + params[0] + "' doesn't exist in the collection");
                    };

                    view = new LectureView({model: lecture, el: el});
                    break;

                case "lectures":
                    view = new LecturesView({model: self._data.lectures, el: el});
                    break;

                case "lecturer":
                    if (!params.length) {
                        throw new Error("Index of the lecturer is not passed to ViewFactory to construct 'lecturer' view");
                    }

                    var lecturer = self._data.lecturers.get(params[0]);
                    if (typeof lecturer === "undefined") {
                        throw new Error("A lecturer with id '" + params[0] + "' doesn't exist in the collection");
                    }

                    view = new LecturerView({model: lecturer, el: el});
                    break;

                case "lecturers":
                    view = new LecturersView({model: self._data.lecturers, el: el});
                    break;


                case "twitter":
                    view = new TwitterView({el : el});
                    break;

                default:
                    throw new Error("Can't find appropriate option to generate a view!");

            }

            return view;
        },

        // this is called from the Router
        changeState: function (layoutName) {
            var self = this;
            var additionalArgs = Array.prototype.slice.call(arguments, 1);

            // views for render
            var layoutViews = self._layouts.get(layoutName).getViews();
            // this._renderedViews
            _.each(self._renderedViews, function (e) {
                self.unsubscribe(e);
                e.destroy();
            });
            // empty the array of already rendered views after destroy
            self._renderedViews = [];
            _.each(layoutViews, function (e) {
                try {
                    var view = self.constructView(e.id, e.el, additionalArgs);
                    self.subscribe(view);
                    self._renderedViews.push(view);
                }
                catch (exc) {
                    console.error("Can't create view '" + e.id + "'! " + exc);
                }
            });

            self._currentLayout = layoutName;
            // set current flag in layout model
            self._layouts.setCurrentLayout(layoutName);

            // we need to render views after DOM is ready
            jQuery(function () {
                _.each(self._renderedViews, function (e, i) {
                    e.render();
                });
            });
        },

        getRoute: function (layoutName) {
            if (layoutName) {
                var layout = this._layouts.get(layoutName);
                if (layout) {
                    return layout.get("route");
                }
            }
        },

        // used in Router
        // returns routes obj for registration
        getRoutes: function () {
            var result = [];
            this._layouts.each(function (e, i) {
                result.push({route: e.get("route"), isDefault: e.get("isDefault"), params: [e.id]});
            })

            return result;
        }

    };

    return ctor;
});
