module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: "",
          port: 1111
        }
      }
    },
    jasmine: {
      pivotal: {
        src: 'ChartLibrary.js',
        options: {
          specs: 'tests/*Spec.js',
          helpers: 'tests/*Helper.js'
        }
      }
    },
    watch: {},
    smash: {
      bundle: {
        src: 'scripts/main.js',
        dest: 'ChartLibrary.js'
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'ChartLibrary.min.js': ['<%= smash.bundle.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'scripts/**/*.js', 'tests/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

   // Loading dependencies
   for (var key in grunt.file.readJSON("package.json").devDependencies) {
    if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('build',['smash','uglify']);
  grunt.registerTask('test', ['smash', 'jasmine']);

};