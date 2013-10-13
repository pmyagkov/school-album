/* global define */

define(['backbone', 'localStorage', 'BaseCollection', 'StudentModel'],
    function (Backbone, localStorage, BaseCollection, StudentModel) {
        "use strict";

        var parent = BaseCollection;
        return parent.extend({
            constructor: function StudentCollection() {
                parent.apply(this, arguments);
            },
            initialize: function (students) {
                var self = this;
                this.on("remove", function (model) {
                    // delete model from local storage
                    model.destroy();
                    /*Backbone.sync("delete", model);*/
                })
            },

            comparator: function (a, b) {
                var ac = a.get("created");
                var bc = b.get("created");
                if (ac === bc && _.isUndefined(ac)) {
                    return 0;
                }
                else if (!_.isUndefined(ac) && !_.isUndefined(bc)){
                    return ac > bc ? -1 : 1;

                } else if (_.isUndefined(ac)) {
                    return 1;
                }
                return -1;
            },

            model: StudentModel,
            localStorage: new Backbone.LocalStorage("StudentCollection"),

            clearNewFlag: function () {
                this.each(function (e) {
                    e.set("isNew", false, {silent: true});
                })
            },

            getNewStudents: function () {
                return this.filter(function (e) {return e.get("isNew");});
            }


        });
    }
);
