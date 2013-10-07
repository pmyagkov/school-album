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
                    host: "localhost",
                    port: 1111
                }
            },
            watch: {
                files: ['js/**', 'index.html', 'templates/**', 'css/**'],
                handlebars: {
                    files: 'templates/*.handlebars',
                    tasks: ['handlebars:compile']
                }
            },

            handlebars: {
                compile: {
                    files: {
                        'templates/compiled/templates.js': "templates/*.handlebars"
                    },
                    options: {
                        namespace: 'App.templates',
                        wrapped: true,
                        processName: function(filePath) {
                            var splitted = filePath.split('/');
                            return splitted[splitted.length - 1].split('.')[0];
                        }
                    }
                }

            }

        });

        // Load the plugin that provides the "jasmine" task.
        grunt.loadNpmTasks('grunt-contrib-jasmine');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-reload');
        grunt.loadNpmTasks('grunt-contrib-handlebars');

        // Default task(s).
        grunt.registerTask('test', ['handlebars:compile', 'jasmine', 'connect', 'reload', 'watch']);

    };

})();

