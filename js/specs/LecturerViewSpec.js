/* global define, describe, it, expect */

define(['LecturerView'], function (LecturerView){
    "use strict";

    describe("LecturerView", function () {
        it("should have a constructor named LecturerView", function () {
            var view = new LecturerView();
            expect(view.constructorName).toBe("LecturerView");
        });
    });

});
