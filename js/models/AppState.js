/* global Backbone, _ */
var App = App || {};

App.AppState = function (layoutObj, dataObj) {
    "use strict";

    App.events.on("stateChanged", this.changeState, this);

    // information about possible layouts, rendering element, etc.
    this.layout = layoutObj;

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

    changeState: function (stateRenewal) {
        "use strict";

        if (this.layout.current === stateRenewal.layout) {
            console.log("Don't need to change state.");
        }
        else {
            console.log("State is needed to be changed. New state: " + console.dir(stateRenewal));

            $(this.layout.el).empty();

            var viewNames, currentViews = [];
            var layouts = this.layout.layouts;

            if (typeof (viewNames = layouts[stateRenewal.layout]) !== "undefined") {
                for (var i = 0; i < viewNames.length; i++) {
                    try {
                        var view = App.ViewFactory.createView(viewNames[i], stateRenewal.params || {});
                        currentViews.push(view);
                        view.render();
                    }
                    catch (e) {
                        console.error("Can't create view '" + viewNames[i] + "'!");
                    }
                }
            }

            this.layout.currentViews = currentViews;
            this.layout.current = stateRenewal.layout;
        }
    }

});