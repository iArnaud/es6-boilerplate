module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        debug: true // Generate source maps
                    },
                    transform: ['babelify']
                },
                files: {
                    'scripts/build/app.js': 'scripts/src/app.js'
                }
            }
        },

        uglify: {
            production: {
                options: {
                    compress: true,
                    preserveComments: false,
                    drop_console: true
                },
                files: {
                    "scripts/build/app.min.js": "scripts/build/app.js"
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['browserify','uglify']);
};
