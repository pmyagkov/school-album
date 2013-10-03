/* global Backbone, _ */
var App = App || {};

App.AppState = function (layoutsObj, dataObj) {
    "use strict";

    App.events.on("stateChanged", this.changeState, this);

    // information about possible layouts, views, routes, etc.
    this.layouts = layoutsObj;

    // actual data
    this.data = {
        information: new App.InformationModel(dataObj.information),
        students: new App.StudentCollection(dataObj.students)
    };

    /*this.data.lectures = new App.LectureCollection(dataObj.lectures);
     this.data.lecturers = new App.LecturerCollection(dataObj.lecturers);*/

    return this;
};

App.AppState.prototype = _.extend(App.AppState.prototype, {

});