define([
	'text!templates/courseContentModule.html'
],function(
	template
) {
	return Backbone.View.extend({
	
		tagName: 'li',
		
		initialize: function() {
			
			var t = this;
			t.render();
			t.model.on('change:completed',function(){
				t.markComplete();
			});
			
		},
		
		render: function() {
			
			var t = this;
			
			var body = _.template(template,
				_.clone(t.model.attributes)
			);
			
			t.$el.html(body);
			
		},
		
		setComplete: function(e) {
		
			e.preventDefault();
			this.model.save({
				completed: 1
			});
			
		},
		
		markComplete: function() {
			
			this.$el.addClass('complete');
			
		}
		
	});
});