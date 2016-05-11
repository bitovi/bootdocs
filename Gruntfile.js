module.exports = function(grunt) {
  grunt.loadNpmTasks('documentjs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

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
    connect: {
			server: {
				options: {
					livereload: true,
					open: true,
					port: 4000,
					keepalive: true
				}
			}
		}
  });
  
  grunt.renameTask('documentjs', 'documentjs-orig');
  
  grunt.registerTask('default', ['documentjs-orig', 'copy:demos', 'connect:server']);
  grunt.registerTask('documentjs', ['documentjs-orig', 'copy:demos', 'connect:server']);

};
