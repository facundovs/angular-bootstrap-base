'use strict';

/**
 * @ngdoc function
 * @name requirementResearchApp.controller:LelcrudCtrl
 * @description
 * # LelcrudCtrl
 * Controller of the requirementResearchApp
 */
angular.module('requirementResearchApp')
  .controller('LelcrudCtrl', function ($log,$location) {
    var vm = this;
    vm.customers=["customer1","customer2","customer3"];
    $log.debug("LelCrudCtrl is Starting");
    vm.goToLelList = function(){
      $location.path("/Lel");
    }
  });
