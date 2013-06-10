define([
	'views/courseContentSection',
	'text!templates/admin/topRightEditButton.html',
	'views/admin/courseContentSectionEdit'
],function(
	courseContentSectionPublicView,
	editBtn,
	courseContentSectionEditView
) {
	return courseContentSectionPublicView.extend({
	
		initialize: function() {
		
			this.render();
			this.renderAdmin();
			
		},

		renderAdmin: function() {

			this.$el.prepend(editBtn);

		},

		events: {
			'click .adminEdit': 'editSection'
		},

		editSection: function() {
			var edit = new courseContentSectionEditView({
				model: this.model,
				publicView: this
			});
			this.$el.prepend(edit.el)
		}
		
	});
});