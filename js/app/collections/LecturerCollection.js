/* global define */

define(['backbone', 'localStorage', 'underscore', 'LecturerModel'], function (Backbone, localStorage, _, LecturerModel) {
    "use strict";

    var parent = Backbone.Collection;
    return parent.extend({
        constructor: function LecturerCollection() {
            parent.apply(this, arguments);
        },
        model: LecturerModel,
        initialize: function () {

        },
        localStorage: new Backbone.LocalStorage("LecturerCollection")
    });
});

