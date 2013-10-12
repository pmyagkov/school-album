/* global define */

define([
    'backbone', 'underscore',
    'AboutModel',
    'StudentCollection',
    'LayoutCollection',

    'LectureModel',
    'LectureCollection',

    'LecturerModel',
    'LecturerCollection',

    'layoutsObj',
    'dataObj'
], function (Backbone, _,
             AboutModel,
             StudentCollection,
             LayoutCollection,

             LectureModel,
             LectureCollection,

             LecturerModel,
             LecturerCollection,

             layoutsObj,
             dataObj) {

    "use strict";

    var _currentLayout = "";
    var _currentViews = [];
    var _layouts, _data;

    var fetchCollection = function (collectionCtor, values, options) {
        var result = new collectionCtor();
        var localStorageEmpty = false;
        result.fetch({success: function () {
            if (!result.length) {
                localStorageEmpty = true;
                result.reset(values, _.extend(options ? options : {}, {silent: true}));
            }
        }, error: function (e) {
            console.error(collectionCtor.name + ".fetch failure: ", e);
        }})

        if (localStorageEmpty) {
            result.save();
        }

        return result;
    };


    var ctor = function AppState() {
        // information about possible layouts, views, routes, etc.
        _layouts = new LayoutCollection(layoutsObj);
        var lecturers = new LecturerCollection(dataObj.lecturers);
        _data = {
            about: new AboutModel(dataObj.about),
            students: fetchCollection(StudentCollection, dataObj.students),
            lectures: new LectureCollection(dataObj.lectures, {lecturers: lecturers}),
            lecturers: lecturers
        };
        lecturers.addLectures(_data.lectures);
    };

    ctor.prototype = {
        getCurrentLayout: function () {
            return _currentLayout;
        },
        setCurrentLayout: function (value) {
            _currentLayout = value;
            _layouts.setCurrent(value);
        },
        isCurrentLayout: function (layoutName) {
            return _currentLayout === layoutName;
        },


        getCurrentViews: function () {
            return _currentViews;
        },
        setCurrentViews: function (value) {
            _currentViews = value;
        },


        getAbout: function () {
            return _data.about;
        },


        getLayout: function (id) {
            return _layouts.get(id);
        },
        getLayouts: function () {
            return _layouts;
        },


        getStudent: function (id) {
            return _data.students.get(id);
        },
        getStudents: function () {
            return _data.students;
        },


        getLecture: function (id) {
            return _data.lectures.get(id);
        },
        getLectures: function () {
            return _data.lectures;
        },


        getLecturer: function (id) {
            return _data.lecturers.get(id);
        },
        getLecturers: function () {
            return _data.lecturers;
        }
    };

    return ctor;
});
