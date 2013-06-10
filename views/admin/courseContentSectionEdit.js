define([
	'text!templates/admin/courseContentSectionEdit.html',
	'views/admin/courseContentModuleAdmin',
	'models/courseContentModule',
	'views/admin/courseContentVideoAdmin'
],function(
	template,
	courseContentModuleView,
	courseContentModuleModel,
	courseContentVideoAdminView
) {
	return Backbone.View.extend({

		tagName: 'div',
		className: 'block sectionEdit',
	
		initialize: function() {
		
			this.render();
			
		},

		render: function() {

			var pk = this.model.get('section_pk');

			this.$el.html(
				_.template(template,_.clone(this.model.attributes))
			);

			this.$('#description').appear(function() {
				CKEDITOR.replace( 'description', {
					toolbar: 'Job',
					width: '608',
					height: '146',
					resize_maxWidth: 608,
					toolbarGroups: [
					    { name: 'basicstyles', groups: [ 'basicstyles' ] },
					    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
					    { name: 'links' },
					    '/',
					    { name: 'styles' },
					    { name: 'colors' }
					]
				});
			});

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

		},

		events: {
			'click .visible': 'changeVisibility',
			'change #addModule': 'addModule'
		},

		changeVisibility: function() {

			console.log(this.model.attributes);
			var btn = this.$('.visible').find('.icon');
			if (btn.hasClass('icon-eye')) {
				btn.removeClass('icon-eye').addClass('icon-eye-blocked');
			} else {
				btn.removeClass('icon-eye-blocked').addClass('icon-eye');
			}

		},

		addModule: function() {
			var t = this;
			var dd = t.$('#addModule');
			var type = dd.val();
			var module = new courseContentModuleModel({
				type: type
			});
			dd.val('');

			new courseContentVideoAdminView({
				model: new courseContentModuleModel()
			});
		}
		
	});
});