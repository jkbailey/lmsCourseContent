define(function() {
	return Backbone.Model.extend({
		idAttribute: 'choice_pk',
		url: '/education/course-content/attachment',
		initialize: function() {
			
		}
	});
});