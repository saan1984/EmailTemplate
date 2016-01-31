var app = angular.module("myGenApp",['ngAnimate',"ngMaterial",'imageupload']);

app.controller("GenController", function($scope,$window,$mdSidenav){

	$scope.makeCopy= function(){
		clipboard.copy({
			"text/html": $scope.result
		})
	}
	$scope.generate = function(){
		var stylePreview = "<head><style>"+document.getElementById("style").cloneNode(true).innerHTML+"</style></head>",
			htmlPreview = "<body>"+document.getElementById("generatedPreview").cloneNode(true).innerHTML+"</body>";
		$scope.result =   "<html>"+stylePreview+htmlPreview+"</html>";
	}

	$scope.createNewTip = function() {
		$window.location.reload();
	};
});