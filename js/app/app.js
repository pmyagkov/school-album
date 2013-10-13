/* global require */

requirejs(['backbone', 'jquery', 'underscore',
    'Router', 'events', 'AppStateController', 'Utils',

    'layoutsObj',
    'dataObj'],

    function (Backbone, $, _, Router, events, AppStateController, Utils, layoutsObj, dataObj) {
        "use strict";

        var appStateController = new AppStateController(layoutsObj, dataObj);
        var router = new Router(appStateController);









        if (!window._ua) {
            var _ua = navigator.userAgent.toLowerCase();
        }

        var intval = function intval(value) {
            if (value === true) return 1;
            return parseInt(value) || 0;
        };

        var sbWidth = function sbWidth() {
            if (window._sbWidth === undefined) {
                var div = document.createElement('div');

                div.style.overflowY = 'scroll';
                div.style.width =  '50px';
                div.style.height = '50px';

                div.style.visibility = 'hidden';

                document.body.appendChild(div);
                window._sbWidth = div.offsetWidth - div.clientWidth;
                document.body.removeChild(div);

            }
            return window._sbWidth;
        };


        var browser = {
            version: (_ua.match( /.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
            opera: /opera/i.test(_ua),
            msie: (/msie/i.test(_ua) && !/opera/i.test(_ua)),
            /*msie6: (/msie 6/i.test(_ua) && !/opera/i.test(_ua)),
            msie7: (/msie 7/i.test(_ua) && !/opera/i.test(_ua)),
            msie8: (/msie 8/i.test(_ua) && !/opera/i.test(_ua)),
            */
            msie9: (/msie 9/i.test(_ua) && !/opera/i.test(_ua)),
            mozilla: /firefox/i.test(_ua),
            chrome: /chrome/i.test(_ua),
            safari: (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
            iphone: /iphone/i.test(_ua),
            ipod: /ipod/i.test(_ua),
            iphone4: /iphone.*OS 4/i.test(_ua),
            ipod4: /ipod.*OS 4/i.test(_ua),
            ipad: /ipad/i.test(_ua),
            android: /android/i.test(_ua),
            bada: /bada/i.test(_ua),
            mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(_ua),
            msie_mobile: /iemobile/i.test(_ua),
            safari_mobile: /iphone|ipod|ipad/i.test(_ua),
            opera_mobile: /opera mini|opera mobi/i.test(_ua),
            opera_mini: /opera mini/i.test(_ua),
            mac: /mac/i.test(_ua)
        };


        $(window).resize(function() {

            var w = window, de = document.documentElement;
            var dwidth = Math.max(intval(w.innerWidth), intval(de.clientWidth));
            var sbw = sbWidth();

            $('.scroll-fix').width((dwidth - sbw * (browser.msie7 ? 2 : 1) - 1) - 1 - 20);

            window._progressBar_width = $('.progressPart:visible').width();
            $('.test').width(window._progressBar_width);
        });

        $(window).resize();
        /*appState.getStudents().save();*/


    }
);
