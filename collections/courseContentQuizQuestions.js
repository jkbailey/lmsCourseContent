define([
	'models/courseContentQuizQuestion'
],function(
	courseContentQuizQuestionModel
) {
	return Backbone.Collection.extend({
		model: courseContentQuizQuestionModel
	});
});