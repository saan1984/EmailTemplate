var app = angular.module("myGenApp",['ngAnimate',"ngMaterial",'imageupload']);

app.controller("GenController", function($scope){
		$scope.makeCopy= function(){
			var iframe = document.getElementById("iframe"),
				stylePreview = "<style>"+document.getElementById("style").cloneNode(true).innerHTML+"<style>",
				htmlPreview = "<body>"+document.getElementById("generatedPreview").cloneNode(true).innerHTML+"</body>";
			console.log("iframe",htmlPreview);
			iframe.srcdoc =   htmlPreview+stylePreview;
		}
});