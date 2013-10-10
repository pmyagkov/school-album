/* global define, describe, it, expect */

define(['StudentView', 'StudentModel'], function (StudentView, StudentModel){
    "use strict";

    describe("StudentView", function () {
        it("should have a constructor named StudentView", function () {
            var view = new StudentView();
            expect(view.constructor.name).toBe("StudentView");
        });
    });

});

