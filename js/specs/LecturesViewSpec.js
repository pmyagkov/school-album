/* global define, describe, it, expect */

define(['LecturesView'], function (LecturesView){
    "use strict";

    describe("LecturesView", function () {
        it("should have a constructor named LecturesView", function () {
            var view = new LecturesView();
            expect(view.constructor.name).toBe("LecturesView");
        });
    });

});
