angular.module('noserver', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'mainCtrl'
        })
        .state('five-day', {
            url: '/5day',
            templateUrl: '../views/fiveDay.html',
            controller: 'mainCtrl'
        })
        .state('ten-day', {
            url: '/10day',
            templateUrl: '../views/tenDay.html',
            controller: 'mainCtrl'
        })
        .state('hourly', {
            url: '/hourly',
            templateUrl: '../views/hourly.html',
            controller: 'mainCtrl'
        })
})