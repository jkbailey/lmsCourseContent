define([
	'courseContentSection' //path set in main.js/admin.js
],function(
	courseContentSectionView
) {
	return Backbone.View.extend({
		
		tagName: 'div',
	
		initialize: function() {
		
			this.render();
			
		},
		
		render: function() {
			
			var t = this;
			
			$.each(this.collection.models,function(k,v) {
			
				var section = new courseContentSectionView({
					model: v
				});
				
				t.$el.append(section.el);
				
			});
			
		}
		
	});
});