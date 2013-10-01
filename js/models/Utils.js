var App = App || {};

App.Utils = {
    toHtmlCase: function (str) {
        "use strict";

        function convert(match) {
            if (typeof match === "string") {
                return match.charAt(0).toLowerCase() + match.slice(1);
            }
            return match;
        }

        var regex = /[A-Z]*[a-z\d]+(?=[A-Z]|$)/g;

        var result = "";
        var match = regex.exec(str);
        result = match.length ? convert(match[0]) : str;
        if (!match) {
            return str;
        }
        else {
            while ((match = regex.exec(str)) !== null && match.length) {
                result = result + "-" + convert(match[0]);
            }
            return result;
        }
    }
};