requirejs.config({
	baseUrl: '/js/application/courseContent',
	paths: {
		text: '../../text',
		swfobject: '../../swfobject',

		courseContentSection: 'views/courseContentSection'
	}
});

requirejs([
	'routers/public'
],function(
	courseRouterPublic
){
	new courseRouterPublic();
	Backbone.history.start();
});
