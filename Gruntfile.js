(function () {
    'use strict';

    //noinspection JSHint
    module.exports = function (grunt) {

        // Project configuration.
        grunt.initConfig({
            jasmine: {
                pivotal: {
                    src: ['js/models/*.js'],
                    options: {
                        specs: 'js/specs/*Spec.js',
                        helpers: 'js/specs/*Helper.js',
                        vendor: ['js/lib/underscore.js', 'js/lib/Backbone.js', 'js/lib/jQuery.js']
                    }

                }
            }

        });

        // Load the plugin that provides the "jasmine" task.
        grunt.loadNpmTasks('grunt-contrib-jasmine');


        // Default task(s).
        grunt.registerTask('test', ['jasmine']);

    };

})();

