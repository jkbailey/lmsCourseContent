requirejs.config({
	baseUrl: '/js/application/courseContent',
	paths: {
		text: '../../text',
		swfobject: '../../swfobject',
		dropzone: '../../dropzone',

		courseContentSection: 'views/admin/courseContentSectionAdmin'
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
