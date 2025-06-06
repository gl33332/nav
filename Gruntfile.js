module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Example task
    uglify:min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt {
      build: {
        src: 'src/app.js',
       -contrib-ugl dest: 'dist/appify.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
