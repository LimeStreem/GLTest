'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		typescript:{
			base:{
				src:['WebGLTest/glLib.ts'],
				dest:'WebGLTest/jThree.js',
				options:{
					comments:true,
					target:'es5'
				}

			}
		},watch:{
			scripts:{
				files:['WebGLTest/*.ts','WebGLTest/jThree/*.ts'],
				tasks:['compile'],
				options:{}
			}
		},
		qunit:{
			all:{
				options:{
					urls:[
						'http://localhost:8081/WebGLTest/Test.html'
					]
				}
			}
		},
		connect:{
		local:{
				options:{
					port:8081
			}
		}
		},
		blanket_qunit:{
			all:{
				options:{
					urls:['http://localhost:8081/WebGLTest/Test.html?coverage=true&gruntReport'],
					threshold:20
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-blanket-qunit');
	grunt.registerTask('travis',['typescript','connect','blanket_qunit']);
	grunt.registerTask('compile',['typescript']);
	grunt.registerTask('server',['connect']);
	grunt.registerTask('default',['typescript','connect','qunit','blanket_qunit']);
};
