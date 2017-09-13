(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider', ];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'src/templates/home.template.html'
	})

	.state('categories', {
		url: '/categories',
		templateUrl: 'src/templates/categories.template.html',
		controller: 'CategoriesController as Categories',
		resolve: {
			categoriesData: ['MenuDataService', function (MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})

	.state('items', {
		url: '/items/{category}',
		templateUrl: 'src/templates/items.template.html',
		controller: 'ItemsController as Items',
		resolve: {
			itemsData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.category);
			}]
		}
	});
}


})();