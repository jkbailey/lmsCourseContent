define([
	'collections/courseContentQuizQuestions'
],function(
	courseContentQuizQuestionsCollection
) {
	return Backbone.Model.extend({
		idAttribute: 'module_pk',
		url: '/education/course-content/attachment',
		initialize: function() {
			if (this.get('type') === 'QUIZ') {
				var questions = this.get('questions');
				this.set({
					questions: new courseContentQuizQuestionsCollection(questions)
				});
			}
		},
		markComplete: function() {

			this.set({
				complete: true
			});

		}
	});
});