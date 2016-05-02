MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();


var app = angular.module('electricVehicles', ['ngAnimate']);

	var Chinacountryis = "China";
       var Chinacarsincountry = 125000000;/** http://en.wikipedia.org/wiki/List_of_countries_by_vehicles_per_capita*/
       var Chinamilespergallon = 35;/** http://www.marketingcharts.com/topics/asia-pacific/us-last-among-major-countries-in-car-fuel-economy-standards-1141/icct-fuel-economy-mpg-standardsgif*/
       var Chinaavgmilescardriven = 10000;
       var Chinadecimalelectric = .25;
       var Chinapercentelectric = 25;
       var Chinaanswertoproblem = Math.round(Chinacarsincountry*Chinaavgmilescardriven/Chinamilespergallon*Chinapercentelectric);
       
	var Japancountryis = "Japan";
       var Japancarsincountry = 75000000;/** http://en.wikipedia.org/wiki/List_of_countries_by_vehicles_per_capita*/
       var Japanmilespergallon = 45;/** http://www.marketingcharts.com/topics/asia-pacific/us-last-among-major-countries-in-car-fuel-economy-standards-1141/icct-fuel-economy-mpg-standardsgif*/
       var Japanavgmilescardriven = 5000;
       var Japandecimalelectric = .50;
       var Japanpercentelectric = 50;
       var Japananswertoproblem = Math.round(Japancarsincountry*Japanavgmilescardriven/Japanmilespergallon*Japanpercentelectric);
       
	var Kenyacountryis = "Kenya";
       var Kenyacarsincountry = 1000000;/** http://en.wikipedia.org/wiki/List_of_countries_by_vehicles_per_capita*/
       var Kenyamilespergallon = 20;/** http://www.marketingcharts.com/topics/asia-pacific/us-last-among-major-countries-in-car-fuel-economy-standards-1141/icct-fuel-economy-mpg-standardsgif*/
       var Kenyaavgmilescardriven = 10000;
       var Kenyadecimalelectric = .10;
       var Kenyapercentelectric = 10;
       var Kenyaanswertoproblem = Math.round(Kenyacarsincountry*Kenyaavgmilescardriven/Kenyamilespergallon*Kenyapercentelectric);
       
	var countryis = "Russia";
       var Russiacarsincountry = 40000000; /** http://en.wikipedia.org/wiki/List_of_countries_by_vehicles_per_capita*/
       var Russiamilespergallon = 25; /** http://www.marketingcharts.com/topics/asia-pacific/us-last-among-major-countries-in-car-fuel-economy-standards-1141/icct-fuel-economy-mpg-standardsgif*/
       var Russiaavgmilescardriven = 30000;
       var Russiadecimalelectric = .10;
       var Russiapercentelectric = 10;
       var Russiaanswertoproblem = Math.round(Russiacarsincountry*Russiaavgmilescardriven/Russiamilespergallon*Russiapercentelectric);
       
var USAcountryis = "USA";
var USAcarsincountry = 250000000;
var USAmilespergallon = 25;
var USAavgmilescardriven = 15000;
var USAdecimalelectric = .25;
var USApercentelectric = 25;
var USAanswertoproblem = Math.round(USAcarsincountry*USAavgmilescardriven/USAmilespergallon*USApercentelectric);

    
app.directive("mathjaxBind", function() { //<!--http://jsfiddle.net/spicyj/ypqvp/
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs, InformationService) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});


app.controller('MyCtrl', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression1 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe = false;
	
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	};
	
    
});

/*app.controller('MyCtrl2', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression2 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe2 = false;
	
	$scope.myFunc = function() {
		$scope.showMe2 = !$scope.showMe2;
	};
	
    
});*/

/*app.controller('MyCtrl3', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe3 = false;
	
	$scope.myFunc = function() {
		$scope.showMe3 = !$scope.showMe3;
	};
	
    
});*/
 
       
app.controller('LocationListController', function ($scope, InformationService) {
	$scope.order = "place";
	$scope.info = InformationService;

});


app.controller('LocationDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;

});


app.service('InformationService', function () {

	return {
		
		'addLocation': function (location) {
			this.locations.push(location);
		},
	
		'selectedLocation': null,
		'locations': [
			{
				"place": "China",
				"carsincountry": 125000000,
				"milespergallon": 35,
				"avgmilescardriven": 10000,
				"decimalelectric": .25,
				"percentelectric": 25,
				"question": "\ \\left("+Chinacarsincountry.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ total \\ cars\\right) \\times \\left("+Chinaavgmilescardriven.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ miles}{\ year}\\right)\\div \\left("+Chinamilespergallon+" \\frac{\ miles}{\ gallon}\\right) \\times \\left("+Chinadecimalelectric+"\\right) = "+Chinaanswertoproblem.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ gallons \\ saved}{\\ yr}"
				  
			},
			{
				"place": "Japan",
				"carsincountry": 75000000,
				"milespergallon": 45,
				"avgmilescardriven": 5000,
				"decimalelectric": .50,
				"percentelectric": 50,
				"question": "\ \\left("+Japancarsincountry.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ total \\ cars\\right) \\times \\left("+Japanavgmilescardriven.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ miles}{\ year}\\right)\\div \\left("+Japanmilespergallon+" \\frac{\ miles}{\ gallon}\\right) \\times \\left("+Japandecimalelectric+"\\right) = "+Japananswertoproblem.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ gallons \\ saved}{\\ yr}"
			
				
			},
			{
				"place": "Kenya",
				"carsincountry": 1000000,
				"milespergallon": 20,
				"avgmilescardriven": 10000,
				"decimalelectric": .10,
				"percentelectric": 10,
				"question": "\ \\left("+Kenyacarsincountry.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ total \\ cars\\right) \\times \\left("+Kenyaavgmilescardriven.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ miles}{\ year}\\right)\\div \\left("+Kenyamilespergallon+" \\frac{\ miles}{\ gallon}\\right) \\times \\left("+Kenyadecimalelectric+"\\right) = "+Kenyaanswertoproblem.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ gallons \\ saved}{\\ yr}"
				
			},
			{
				"place": "Russia",
				"carsincountry": 40000000,
				"milespergallon": 25,
				"avgmilescardriven": 30000,
				"decimalelectric": .10,
				"percentelectric": 10,
				"question": "\ \\left("+Russiacarsincountry.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ total \\ cars\\right) \\times \\left("+Russiaavgmilescardriven.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ miles}{\ year}\\right)\\div \\left("+Russiamilespergallon+" \\frac{\ miles}{\ gallon}\\right) \\times \\left("+Russiadecimalelectric+"\\right) = "+Russiaanswertoproblem.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ gallons \\ saved}{\\ yr}"  
				
			},
			{
				"place": "USA",
				"carsincountry": 250000000,
				"milespergallon": 25,
				"avgmilescardriven": 15000,
				"decimalelectric": .25,
				"percentelectric": 25,
				"question": "\ \\left("+USAcarsincountry.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ total \\ cars\\right) \\times \\left("+USAavgmilescardriven.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ miles}{\ year}\\right)\\div \\left("+USAmilespergallon+" \\frac{\ miles}{\ gallon}\\right) \\times \\left("+USAdecimalelectric+"\\right) = "+USAanswertoproblem.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ gallons \\ saved}{\\ yr}"
				
			},
		]
		
	};
});