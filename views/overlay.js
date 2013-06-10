define([
	'text!templates/overlay.html'
],function(
	template
) {
	return Backbone.View.extend({
	
		tagName: 'div',
		className: 'overlay',
		
		initialize: function() {

			this.render();
			
		},
		
		render: function() {
			
			var t = this;
			
			t.$el.html(template);
			t.$('.body').html(t.options.view.el);
			$(document).trigger('overlayLoad');
			$('body').append(t.el).addClass('hasOverlay');
			
		},

		events: {
			'click': 'close'
		},

		close: function(e) {

			var t = this;

			if ($(e.target).hasClass('overlay')) {
				t.options.view.remove();
				$('body').removeClass('hasOverlay');
				t.remove();
				window.location = '#!/';
			}
		}
		
	});
});