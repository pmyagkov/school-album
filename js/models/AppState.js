/* global Backbone, _ */
var App = App || {};

App.AppState = function (layoutsObj, dataObj) {
    "use strict";

    var _currentLayout = "";
    var _currentViews = [];

    return (function () {
        // information about possible layouts, views, routes, etc.
        this.layouts = new App.LayoutCollection(layoutsObj);

        // actual data
        this.data = {
            information: new App.InformationModel(dataObj.information),
            students: new App.StudentCollection(dataObj.students)
        };
        /*this.data.lectures = new App.LectureCollection(dataObj.lectures);
         this.data.lecturers = new App.LecturerCollection(dataObj.lecturers);*/

        _.extend(this, {
            getCurrentLayout: function () {
                return _currentLayout;
            },

            setCurrentLayout: function (value) {
                _currentLayout = value;
                this.layouts.setCurrent(value);
            },

            getCurrentViews: function () {
                return _currentViews;
            },

            setCurrentViews: function (value) {
                _currentViews = value;
            }
        });

        return this;
    }).call(this);
};
