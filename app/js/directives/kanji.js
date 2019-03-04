angular.module("grandVoyageApp")
.directive('kanjiLeft', function factory() {
	return{
			templateUrl:'templates/kanjiLeft.html',
			replace:true
	}
});

angular.module("grandVoyageApp")
.directive('kanjiRight', function factory() {
	return{
			templateUrl:'templates/kanjiRight.html',
			replace:true
	}
});