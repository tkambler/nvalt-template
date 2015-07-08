'use strict';

module.exports = function(grunt) {
    grunt.loadTasks('tasks');
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['build']);
};
