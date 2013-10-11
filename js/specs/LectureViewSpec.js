/* global define, describe, it, expect */

define(['LectureView'], function (LectureView){
    "use strict";

    describe("LectureView", function () {
        it("should have a constructor named LectureView", function () {
            var view = new LectureView();
            expect(view.constructor.name).toBe("LectureView");
        });
    });

});
