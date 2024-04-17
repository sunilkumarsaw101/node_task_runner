module.exports = function (grunt) {
  //configure the tasks
  grunt.initConfig({
    //specify task.
    uglify: {
      target: {
        files: {
          // "dest/js/main.min.js":['src/js/input1.js', 'src/js/input2.js']
          //or
          "dest/js/main.min.js": ["src/js/*.js"],
        },
      },
    },

    //configure minify css.
    cssmin:{
      target:{
        files:[
          {
           
            expand: true,
            cwd: 'src/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dest/css',
            ext: '.min.css'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};
