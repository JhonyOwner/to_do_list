module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                task: ['less:development']
            },
            html: {
                files: ['src.index.html'],
                task: ['replace.dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns:[
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './style/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                }
            }
        }
    });

    grunt.registerTask('minhaTarefa', function () {
        // conteúdo da tarefa
        console.log('Olá Grunt');
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'replace:dist']);
}