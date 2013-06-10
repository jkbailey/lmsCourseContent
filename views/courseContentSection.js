define([
	'text!templates/courseContentSection.html',
	'views/courseContentModule'
],function(
	template,
	courseContentModuleView
) {
	return Backbone.View.extend({
	
		tagName: 'div',
		className: 'block mb pr',
		
		initialize: function() {
		
			this.render();
			
		},
		
		render: function() {
		
			var body = _.template(template,
				_.clone(this.model.attributes)
			);
			
			this.$el.html(body);
			this.renderAttachments();
			
		},
		
		renderAttachments: function() {
			
			var t = this;
			var attachments = t.model.get('modules');
			
			if (!attachments) { return; }
			
			$.each(attachments.models, function(k,v){
				var attachment = new courseContentModuleView({
					model: v
				});
				
				t.$('.blockList').append(attachment.el);
				
			});
		
		}
		
	});
});