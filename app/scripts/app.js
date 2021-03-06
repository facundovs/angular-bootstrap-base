'use strict';

/**
 * @ngdoc overview
 * @name requirementResearchApp
 * @description
 * # requirementResearchApp
 *
 * Main module of the application.
 */
angular
  .module('requirementResearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider,$translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Lel', {
        templateUrl: 'views/lel.html',
        controller: 'LelCtrl',
        controllerAs: 'Lel'
      })
      .when('/Scenarios', {
        templateUrl: 'views/scenarios.html',
        controller: 'ScenariosCtrl',
        controllerAs: 'Scenarios'
      })
      .when('/LelCrud', {
        templateUrl: 'views/lelcrud.html',
        controller: 'LelcrudCtrl',
        controllerAs: 'LelCrud'
      })
      .otherwise({
        redirectTo: '/'
      });
      var translationEntries =[];
      var langMap = {
          'en_AU': 'en',
          'en_CA': 'en',
          'en_NZ': 'en',
          'en_PH': 'en',
          'en_UK': 'en',
          'en_US': 'es',
          'es_AR': 'es',
          'es_BO': 'es',
          'es_CL': 'es',
          'es_CO': 'es',
          'es_CR': 'es',
          'es_DO': 'es',
          'es_EC': 'es',
          'es_SV': 'es',
          'es_GT': 'es',
          'es_HN': 'es',
          'es_MX': 'es',
          'es_NI': 'es',
          'es_PA': 'es',
          'es_PY': 'es',
          'es_PE': 'es',
          'es_PR': 'es',
          'es_ES': 'es',
          'es_UY': 'es',
          'es_VE': 'es'
      };

      var files = [
          'lel.json' , 'commons.json'
      ];
      angular.forEach(files, function (file) {
          translationEntries.push({ prefix: 'translations/', suffix: '/' + file });
      });

      $translateProvider.useSanitizeValueStrategy(null).useStaticFilesLoader({ files: translationEntries })
          .registerAvailableLanguageKeys(['en', 'es'], langMap).determinePreferredLanguage().fallbackLanguage(['en']);



  });
