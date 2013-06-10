define([
	'collections/courseContentQuizQuestionAnswers'
],function(
	courseContentQuizQuestionAnswersCollection
) {
	return Backbone.Model.extend({
		idAttribute: 'question_pk',
		url: '/education/course-content/attachment',
		initialize: function() {

			var t = this;
			var choices = t.get('choices');
			
			if (choices) {
				t.set({
					choices: new courseContentQuizQuestionAnswersCollection(choices)
				});
			}

		}
	});
});