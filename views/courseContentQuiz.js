define([
	'views/overlay',
	'views/courseContentQuizQuestion',
	'text!templates/courseContentQuiz.html',
	'text!templates/courseContentQuizNavItem.html'
],function(
	overlayView,
	courseContentQuizQuestionView,
	template,
	navItem
) {
	return Backbone.View.extend({
	
		tagName: 'div',
		className: 'quiz',
		
		initialize: function() {
			
			var t = this;
			t.render();
			
		},
		
		render: function() {
			
			var t = this;
			
			t.$el.html(template);
			
			t.renderNav();
			t.renderQuestion(t.model.get('questions').models[0].get('question_pk'));

			new overlayView({
				view: t
			});
			
		},

		renderNav: function() {

			var t = this;
			var qs = t.model.get('questions');

			for (var i = 0; i < qs.length; i++) {
				t.$('.nav > ul').append(
					_.template(navItem,{
						num: i+1,
						pk: qs.models[i].get('question_pk')
					})
				);
			}

		},

		renderQuestion: function(pk) {

			var t = this;
			var qs = t.model.get('questions');
			var q = qs.where({question_pk: pk})[0];

			if (t.question) t.question.remove();

			t.question = new courseContentQuizQuestionView({
				model: q
			});

			t.$('.body').html(t.question.el);
			t.$('.nav .active').removeClass('active');
			t.$('.nav [data-question="'+pk+'"]').addClass('active');

			t.updateFooterNav();

		},

		updateFooterNav: function() {

			var t = this;
			var qs = t.model.get('questions');
			var index = qs.indexOf(t.question.model);

			if (index < qs.length-1) {
				t.$('.navNext').show();
			} else {
				t.$('.navNext').hide();
			}

			if (index > 0) {
				t.$('.navPrev').show();
			} else {
				t.$('.navPrev').hide();
			}

		},

		events: {
			'click .quizNav': 'loadQuestion',
			'click .navNext': 'loadNext',
			'click .navPrev': 'loadPrev'
		},

		loadQuestion: function(e) {

			e.preventDefault();
			this.renderQuestion( $(e.currentTarget).attr('data-question') );

		},

		loadNext: function(e) {

			var t = this;
			var qs = t.model.get('questions');
			var i = qs.indexOf(t.question.model);
			var pk = qs.at(i+1).get('question_pk');
			t.renderQuestion(pk);

		},

		loadPrev: function() {

			var t = this;
			var qs = t.model.get('questions');
			var i = qs.indexOf(t.question.model);
			var pk = qs.at(i-1).get('question_pk');
			t.renderQuestion(pk);

		}
		
	});
});