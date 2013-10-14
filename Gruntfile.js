/* global require */

(function () {
    'use strict';

    //noinspection JSHint
    module.exports = function (grunt) {

        grunt.initConfig({
            cssmin: {
                combine: {
                    files: {
                        'css/compiled/main.css': ['css/*.css']
                    }
                },
                add_banner: {
                    options: {
                        banner: '/* ШРИ 2013 — школьный альбом */'
                    },
                    files: {
                        'css/compiled/main.css': ['css/compiled/main.css']
                    }
                },
                minify: {
                    expand: true,
                    report: 'gzip',
                    cwd: 'css/compiled/',
                    src: ['main.css'],
                    dest: 'assets/',
                    ext: '.min.css'
                }
            },
            uglify: {
                minify: {
                    files: {
                        'assets/compile.min.js': ['js/application.js']
                    }
                }
            },

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

            watch: {
                files: ['js/**', 'index.html', 'templates/**', 'css/**'],
                handlebars: {
                    files: 'templates/*.handlebars',
                    tasks: ['handlebars:compile']
                },
                jasmine: {
                    files: ['js/testConfig.js', 'js/specs/*Spec.js', 'js/app/*.js',
                        'js/collections/*.js', 'js/models/*.js', 'js/views/*.js',
                        'js/controllers/*.js'],
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

        grunt.loadNpmTasks('grunt-contrib-jasmine');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-handlebars');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // Default task(s).
        grunt.registerTask('default', ['handlebars:compile', 'connect', 'watch']);
        grunt.registerTask('prod', ['handlebars:compile', 'cssmin', 'uglify','jasmine:test']);

    };

})();

