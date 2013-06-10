define([
	'models/courseContentSection'
],function(
	courseContentSectionModel
) {
	return Backbone.Collection.extend({
		model: courseContentSectionModel
	});
});