/* global define */

define(['backbone', 'localStorage', 'underscore',
    'BaseCollection', 'LecturerModel'],
    function (Backbone, localStorage, _, BaseCollection, LecturerModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function LecturerCollection() {
                parent.apply(this, arguments);
            },
            model: LecturerModel,
            initialize: function () {

            },

            localStorage: new Backbone.LocalStorage("LecturerCollection")
        });
    }
);

