define([
	'views/overlay',
	'text!templates/courseContentVideo.html',
	'text!templates/courseContentVideoSource.html',
	'swfobject'
],function(
	overlayView,
	template,
	templateSource,
	swfobjects
) {
	return Backbone.View.extend({
	
		tagName: 'div',
		className: 'video',
		
		initialize: function() {
			
			var t = this;
			t.render();
			
		},
		
		render: function() {
			
			var t = this;
			var sources = [];

			if (t.html5()) {
				$.each(t.model.get('sources'), function(k,v) {
					sources.push(
						_.template(templateSource,
							v
						)
					);
				});
			} else {
				$(document).on('overlayLoad',function(){
					swfobject.embedSWF('/tempMedia/JudgesOne.swf', 'video_container', '640', '480', '9.0.0');
				});
			}

			t.$el.html(
				_.template(template,{
					sources: sources.join('')
				})
			);

			new overlayView({
				view: t
			});
			
		},

		remove: function() {

			var t = this;
			var v = t.$('video')[0];
			
			t.stopListening();

			if (v) {
				v.pause();
				delete(v);
			}

			t.$el.remove();

		},

		html5: function() {
			return !!document.createElement('video').canPlayType;
		}
		
	});
});