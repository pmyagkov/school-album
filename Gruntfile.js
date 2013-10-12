/* global require */

(function () {
    'use strict';

    //noinspection JSHint
    module.exports = function (grunt) {

        // Project configuration.
        grunt.initConfig({
            jasmine: {
                test: {
                    src: ['js/app/Router.js', 'js/app/Utils.js'],
                    options: {
                        keepRunner: true,
                        specs: ['js/specs/*Spec.js'],
                        template: require('grunt-template-jasmine-requirejs'),
                        templateOptions: {
                            requireConfigFile: ['js/app/config.js', 'js/specs/testConfig.js']
                        }
                    }
                }
            },
            // Сервер
            connect: {
                test: {
                    options: {
                        port: 1111,
                        base: '.'
                    }
                }
            },

            // Livereload сервер
            reload: {
                port: 35729,
                liveReload: {},
                proxy: {
                    host: 'localhost',
                    port: 1111
                }
            },
            watch: {
                files: ['js/**', 'index.html', 'templates/**', 'css/**'],
                handlebars: {
                    files: 'templates/*.handlebars',
                    tasks: ['handlebars:compile']
                },
                jasmine: {
                    files: ['js/testConfig.js', 'js/specs/*Spec.js', 'js/app/*.js', 'js/collections/*.js', 'js/models/*.js', 'js/views/*.js'],
                    tasks: ['jasmine:test']
                },
                grunt: {
                    files: ['Gruntfile.js'],
                    tasks: ['default']
                }
            },

            handlebars: {
                compile: {
                    files: {
                        'js/app/compiled/templates.js': "templates/*.handlebars"
                    },
                    options: {
                        namespace: 'templates',
                        wrapped: true,
                        amd: true,
                        processName: function(filePath) {
                            var parts = filePath.split('/');
                            return parts[parts.length - 1].split('.')[0];
                        }
                    }
                },
                compilerOptions: {
                    knownHelpers: {
                        "js/app/helpers/handlebarsHelper": true
                    },
                    knownHelpersOnly: false
                }

            }

        });

        // Load the plugin that provides the "jasmine" task.
        grunt.loadNpmTasks('grunt-contrib-jasmine');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');
        /*grunt.loadNpmTasks('grunt-reload');*/
        grunt.loadNpmTasks('grunt-contrib-handlebars');

        // Default task(s).
        grunt.registerTask('default', ['handlebars:compile', 'jasmine:test', 'connect', 'watch']);

    };

})();

