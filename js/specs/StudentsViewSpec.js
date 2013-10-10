/* global define, describe, it, expect */

define(['StudentsView', 'StudentCollection'], function (StudentsView, StudentCollection){
    "use strict";

    describe("StudentsView", function () {
        it("should have a constructor named StudentsView", function () {
            var view = new StudentsView();
            expect(view.constructor.name).toBe("StudentsView");
        });
    });

});
