/* global define */

define(['underscore'], function (_) {
    "use strict";
    return {
        convertStudents: function (students) {

            var validateLink = function (link) {
                return link && link.length && link.length > 5;
            };

            _.each(students, function (e, i) {

                e.id = i + 1;
                delete e.timestamp;

                e.userpic = e.linkPhoto;
                delete e.linkPhoto;

                e.links = {};

                var link = e.linkVk;
                if (validateLink(link)) {
                    e.links.vk = link;

                }

                link = e.linkFacebook;
                if (validateLink(link)) {
                    e.links.facebook = link;

                }

                link = e.linkGihub;
                if (validateLink(link)) {
                    e.links.github = link;
                }

                link = e.linkYaru;
                if (validateLink(link)) {
                    e.links.ya = link;
                }

                delete e.linkVk;
                delete e.linkFacebook;
                delete e.linkGihub;
                delete e.linkYaru;

                return e;
            });

            return students;
        },

        toHtmlCase: function (str) {

            function convert(match) {
                if (typeof match === "string") {
                    return match.charAt(0).toLowerCase() + match.slice(1);
                }
                return match;
            }

            var regex = /[A-Z]*[a-z\d]+(?=[A-Z]|$)/g;

            var match = regex.exec(str);
            var result = match && match.length ? convert(match[0]) : str;
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
});
