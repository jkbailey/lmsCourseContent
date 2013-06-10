define([
	'views/overlay',
	'text!templates/admin/courseContentVideoAdmin.html',
	'dropzone'
],function(
	overlayView,
	template,
	dropzone
){
	return Backbone.View.extend({

		tagName: 'div',
		className: 'block admin',

		initialize: function() {

			this.render();

		},

		render: function() {

			this.$el.html(template);

			var overlay = new overlayView({
				view: this
			});

		},

		events: {

			

		}

	});
});