angular.module('noserver').service('mainSvc', function ($http, config) {


    this.getData = function () {
        return $http.get(`http://api.wunderground.com/api/${config.API_key}/geolookup/conditions/hourly/forecast/forecast10day/webcams/animatedradar/satellite/q/autoip.json`)
        // return $http.get('../../api.json')
            
    }
})