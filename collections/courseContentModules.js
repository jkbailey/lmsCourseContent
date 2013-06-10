define([
	'models/courseContentModule'
],function(
	courseContentModuleModel
) {
	return Backbone.Collection.extend({
		model: courseContentModuleModel
	});
});