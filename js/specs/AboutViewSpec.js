/* global define, describe, it, expect */

define(['AboutView', 'AboutModel'], function (AboutView, AboutModel){
    "use strict";

    describe("AboutView", function () {
        it("should have a constructor named AboutView", function () {
            var view = new AboutView();
            expect(view.constructor.name).toBe("AboutView");
        });
    });

});
