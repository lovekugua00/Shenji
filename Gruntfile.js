module.exports = function(grunt) {
	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		  less:{
		  	options:{
		  		compress:true
		  	},
		  	metro:{
		  		files:{
		  			
		  		}
		  	}
		  },
		  less:{
		  	  development: {
			    options: {
			    	compress:true
			    },
			    files: {
			      "assets/css/main.css": "assets/css/main.less",
			      "assets/css/media.css": "assets/css/media.less",
			      "assets/css/widget.css": "assets/css/widget.less"
			    }
			  }
		  },
		  watch:{
		  	css:{
  			  	files:['assets/css/*.less'],
		  		tasks:['less']
		  	}

		  }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('pinad',['concat:pinad','jshint','uglify','cssmin']);
	grunt.registerTask('ifeng',['uglify:ifeng']);
	grunt.registerTask('sprint',['concat:sprint','jshint:sprint','uglify:sprint','cssmin:sprint']);
	grunt.registerTask('metro',['concat:metro','jshint:metro','uglify:metro','less:metro','cssmin:metro']);
	grunt.registerTask('msncouplet',['concat:msncouplet','jshint:msncouplet','uglify:msncouplet','cssmin:msncouplet']);

};