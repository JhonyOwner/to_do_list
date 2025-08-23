module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('minhaTarefa', function () {
        // conteúdo da tarefa
        console.log('Olá Grunt');
    });

    grunt.registerTask('default', ['minhaTarefa']);
}