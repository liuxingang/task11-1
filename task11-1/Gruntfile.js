module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //文件合并
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            js: {
                src: ['js/imgSwitch.js', 'js/lessonSpread.js'],
                dest: "static/aio.js"
            },
        },
        //less
        less: {
            compile: {
                files: {
                    'css/index.css': 'css/index.less'
                }
            }
        },
        //压缩js
        uglify: {
            build: {
                src: 'static/aio.js', //压缩源文件是之前合并的aio.js文件
                dest: 'static/aio.min.js' //压缩文件为aio.min.js
            }
        },
        //压缩css
        cssmin: {
            css: {
                src: 'css/index.css', //将之前less编译过的index.css进行压缩
                dest: 'static/index.min.css' //压缩文件为index.min.css
            }
        },
        //监听
        watch: {
            scripts: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });

    //加载任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less','concat','uglify','cssmin','watch']);

};
