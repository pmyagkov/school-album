/*global define*/

define(['backbone', 'StudentModel'], function (Backbone, StudentModel) {
    "use strict";

    return Backbone.Collection.extend({
        model: StudentModel,
        initialize: function () {

        }
    });
});
