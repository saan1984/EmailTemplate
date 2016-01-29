var app = angular.module("myGenApp",['ngAnimate',"ngMaterial",'imageupload']);

app.controller("GenController", function($scope,$mdSidenav){

		$scope.makeCopy= function(){
				var stylePreview = "<style>"+document.getElementById("style").cloneNode(true).innerHTML+"<style>",
				htmlPreview = "<body>"+document.getElementById("generatedPreview").cloneNode(true).innerHTML+"</body>";
			$scope.result =   htmlPreview+stylePreview;
		}


	$scope.openLeftMenu = function() {
		clipboard.copy({
			"text/plain": $scope.result,
			"text/html": $scope.result
		})
		$mdSidenav('left').toggle();
	};
});