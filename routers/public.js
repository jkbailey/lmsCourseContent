define([
	'models/course',
	'collections/courseContentSections',
	'views/courseContent',
	'views/courseContentVideo',
	'views/courseContentQuiz'
],function(
	courseModel,
	courseContentSectionsCollection,
	courseContentView,
	courseContentVideoView,
	courseContentQuizView
) {
	return Backbone.Router.extend({
		
		routes: {
			'!/QUIZ/:section_pk/:module_pk': 'quiz',
			'!/VIDEO/:section_pk/:module_pk': 'video',
			'!/': 'index',
			'*path': 'defaultRoute'
		},
		
		defaultRoute: function() {
			var course = new courseModel(courseDetailsData);
			var courseContentSections = this.courseContentSections = new courseContentSectionsCollection(courseContentData);
			var courseContent = new courseContentView({
				collection: courseContentSections
			});
			$('.left_main_box .body').html(courseContent.el);
			$('.left_main_box .head').html(course.get('name'));
			this.initialized = true;
		},

		index: function() {
			if (!this.initialized) this.defaultRoute();
		},

		quiz: function(section_pk, module_pk) {

			var t = this;
			
			t.index();

			var section = t.courseContentSections.where({'section_pk':section_pk})[0];
			var module = section.get('modules').where({'module_pk':module_pk})[0];

			var courseContentQuiz = new courseContentQuizView({
				model: module
			});

			module.markComplete();

		},

		video: function(section_pk, module_pk) {

			var t = this;

			t.index();

			var section = t.courseContentSections.where({'section_pk':section_pk})[0];
			var module = section.get('modules').where({'module_pk':module_pk})[0];

			var courseContentVideo = new courseContentVideoView({
				model: module
			});

			module.markComplete();

		}
		
	});
});