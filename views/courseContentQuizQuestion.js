define([
	'text!templates/courseContentQuizQuestion.html',
	'text!templates/courseContentQuizAnswerItem.html'
],function(
	template,
	answerItem
) {
	return Backbone.View.extend({
	
		tagName: 'div',

		initialize: function() {

			this.render();

		},

		render: function() {

			var t = this;

			var q = t.model;
			var choices = t.model.get('choices');
			var answers = [];

			for (var i = 0; i < choices.length; i++) {
				answers.push(
					_.template(answerItem,{
						i: i,
						question_pk: q.get('question_pk'),
						choice: choices.models[i].get('choice')
					})
				);
			}

			t.$el.html(
				_.template(template,{
					question: q.get('question'),
					answers: answers.join('')
				})
			);

		}
		
	});
});