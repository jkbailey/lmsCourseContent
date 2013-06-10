define([
	'collections/courseContentModules'
],function(
	courseContentModulesCollection
) {
	return Backbone.Model.extend({
	
		initialize: function(){

			var t = this;
			var modules = t.get('module');
			
			if (modules) {
				t.set({
					modules: new courseContentModulesCollection(modules)
				});
				
				modules = t.get('modules');

				for (var i = 0; i < modules.length; i++) {
					modules.models[i].set({
						section_pk: t.get('section_pk')
					});
				}
			}
			
		}
		
	});
});