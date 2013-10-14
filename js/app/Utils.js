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

        convertLectures: function (lectures) {

            _.each(lectures, function (e) {
                e.lecturerId = e.lector_id;
                delete e.lector_id;
                delete e.native_id;

                e.video = e.video_url;
                delete e.video_url;

                e.slides = e.slides_url;
                delete e.slides_url;

                e.title = e.name;
                delete e.name;
            });

            return lectures;
        },

        convertLecturers: function (lecturers) {
            _.each(lecturers, function (e) {
                e.nativeId = e.native_id;
                delete e.native_id;

                e.userpic = e.photo_url;
                delete e.photo_url;

                var parts = e.name.split(' ');
                e.firstName = parts[0];
                e.lastName = parts[1];
                delete e.name;

                delete e.all_lectures;
            });

            return lecturers;
        },

        extractViewName: function (str) {
            var regex = /\w*(?=View)/;
            var match = regex.exec(str);

            var result = match && match.length ? match[0][0].toLowerCase() + match[0].substr(1) : str;
            return result;
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
