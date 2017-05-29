'use strict';

angular.module('noserver', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'mainCtrl'
    }).state('five-day', {
        url: '/5day',
        templateUrl: '../views/fiveDay.html',
        controller: 'mainCtrl'
    }).state('ten-day', {
        url: '/10day',
        templateUrl: '../views/tenDay.html',
        controller: 'mainCtrl'
    }).state('hourly', {
        url: '/hourly',
        templateUrl: '../views/hourly.html',
        controller: 'mainCtrl'
    });
});
'use strict';

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
            console.log(response.data);
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
            };
            $scope.getBackground(response.data.current_observation.weather);
        });
    };
    $scope.receiveData();
});
'use strict';

angular.module('noserver').directive('fiveDay', function () {
    return {
        templateUrl: '../../views/fiveDayTmpl.html'
    };
});
'use strict';

angular.module('noserver').directive('homeDir', function () {
    return {
        templateUrl: '../../views/homeTmpl.html'
    };
});
'use strict';

angular.module('noserver').service('mainSvc', function ($http, config) {

    this.getData = function () {
        return $http.get('https://api.wunderground.com/api/' + config.API_key + '/geolookup/conditions/hourly/forecast/forecast10day/webcams/animatedradar/satellite/q/autoip.json');
        // return $http.get('../../api.json')
    };
});
//# sourceMappingURL=bundle.js.map
