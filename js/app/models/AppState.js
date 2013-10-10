/* global define */

define([
    'backbone', 'underscore',
    'AboutModel',
    'StudentCollection',
    'LayoutCollection',

    'layoutsObj',
    'dataObj'
], function (Backbone, _, AboutModel, StudentCollection, LayoutCollection, layoutsObj, dataObj) {
    "use strict";

    var _currentLayout = "";
    var _currentViews = [];
    var _layouts, _data;

    var ctor = function AppState() {
        // information about possible layouts, views, routes, etc.
        _layouts = new LayoutCollection(layoutsObj);

        // actual data
        _data = {
            about: new AboutModel(dataObj.about),
            students: new StudentCollection(dataObj.students)
        };
        /*this.data.lectures = new App.LectureCollection(dataObj.lectures);
         this.data.lecturers = new App.LecturerCollection(dataObj.lecturers);*/
    };

    ctor.prototype = {
        getCurrentLayout: function () {
            return _currentLayout;
        },

        isCurrentLayout: function (layoutName) {
            return _currentLayout === layoutName;
        },

        setCurrentLayout: function (value) {
            _currentLayout = value;
            _layouts.setCurrent(value);
        },

        getCurrentViews: function () {
            return _currentViews;
        },

        setCurrentViews: function (value) {
            _currentViews = value;
        },

        getLayouts: function () {
            return _layouts;
        },

        getLayout: function (id) {
            return _layouts.get(id);
        },

        getAbout: function () {
            return _data.about;
        },

        getStudents: function () {
            return _data.students;
        },

        getStudent: function (id) {
            return _data.students.get(id);
        }


    };

    return ctor;
});
