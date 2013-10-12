/* global require, describe, it, expect */

define(['Utils'], function (Utils) {
    "use strict";

    describe("Utils", function () {
        it("should convert to html case from camel case", function () {
            expect(Utils.toHtmlCase("camelCaseValue")).toBe("camel-case-value");
            expect(Utils.toHtmlCase("value")).toBe("value");
            expect(Utils.toHtmlCase("CamelCaseValue")).toBe("camel-case-value");
        });
    });

});

