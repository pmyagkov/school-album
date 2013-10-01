describe("Utils", function () {
    "use strict";
    it("should convert to html case from camel case", function () {
        expect(App.Utils.toHtmlCase("camelCaseValue")).toBe("camel-case-value");
        expect(App.Utils.toHtmlCase("value")).toBe("value");
        expect(App.Utils.toHtmlCase("CamelCaseValue")).toBe("camel-case-value");
    });
});
