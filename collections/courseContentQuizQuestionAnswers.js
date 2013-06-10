define([
	'models/courseContentQuizQuestionAnswer'
],function(
	courseContentQuizQuestionAnswerModel
) {
	return Backbone.Collection.extend({
		model: courseContentQuizQuestionAnswerModel
	});
});