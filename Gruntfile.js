module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      build: ['dist/']
    },
    
    copy: {
      'demos': {
        expand: true,
        cwd: '',
        src: 'demos/**/*',
        dest: 'styleguide/'
      }
    },
    
  });

  grunt.loadNpmTasks('documentjs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.renameTask('documentjs', 'documentjs-orig');
  
  grunt.registerTask('default', ['documentjs-orig', 'copy:demos']);
  grunt.registerTask('documentjs', ['documentjs-orig', 'copy:demos']);

};
