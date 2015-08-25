module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      build: ['dist/']
    },
    
    copy: {
      'demos': {
        expand: true,
        cwd: 'author/styles/style-guide/',
        src: 'demos/**/*',
        dest: 'docs/demos/'
      }
    },
    
  });

  grunt.loadNpmTasks('documentjs');
  grunt.renameTask('documentjs', 'documentjs-orig');
  grunt.registerTask('documentjs', ['documentjs-orig', 'copy:demos']);

};
