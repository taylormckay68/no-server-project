angular.module('noserver').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.hours;
    $scope.receiveData = function () {
        mainSvc.getData().then(function (response) {

            $scope.state = response.data.location.state;
            $scope.city = response.data.location.city;
            $scope.current = response.data.current_observation;
            $scope.simpleFor = response.data.forecast.simpleforecast;
            $scope.tenday = response.data.forecast.simpleforecast.forecastday;
            $scope.hourly = response.data.hourly_forecast;
            $scope.satellite = response.data.satellite;
            $scope.webcams = response.data.webcams;
            console.log(response.data)
            $scope.background;
            $scope.getBackground = function (conditions) {
                if (conditions.toLowerCase() === 'clear') {
                    $scope.background = '../img/clear.jpg';
                } else if (conditions.toLowerCase() === 'partly cloudy') {
                    $scope.background = '../img/partlycloudy.jpg';
                } else if (conditions.toLowerCase() === 'cloudy' || conditions.toLowerCase() === 'mostly cloudy') {
                    $scope.background = '../img/cloudy.jpg';
                } else if (conditions.toLowerCase() === 'overcast') {
                    $scope.background = '../img/mostly-cloudy.jpg';
                } else if (conditions.toLowerCase().includes('rain')) {
                    $scope.background = '../img/rain-shower.jpg';
                } else {
                    $scope.background = '../img/partlycloudy.jpg';
                }
            }
            $scope.getBackground(response.data.current_observation.weather);
            
        })
    }
    $scope.receiveData();


})