module.exports = function(grunt) {
    const sass = require('node-sass');
    // configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat for concat css files or js files
        concat: {
            js: {
                src: ['themes/js/*.js'],
                dest: 'assets/js/script.js'
            },
        },
        // sass for compiling scss fill into css files
        sass: {
            options: {
                implementation: sass,

            },
            dist: {
                files: {
                    'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        // uglify for compressed js file
        uglify: {

            build: {
                files: [{
                    src: 'assets/js/script.js',
                    dest: 'assets/js/script-uglified.js'
                }]
            }
        },

        // cssmin for minimize css file
        cssmin: {
            target: {
                files: [{
                    src: 'assets/css/style.css',
                    dest: 'assets/css/style.min.css'
                }]
            }
        },


    })

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-cssmin');







}