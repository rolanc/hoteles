(() => {
    'use strict';
    angular
    .module('RoloTravel')
    .directive('navegacionPrincipal', navegacionPrincipal);
    
    function navegacionPrincipal(){

      const navegacion = {
        templateUrl: '/components/directives/header/header.view.html',
        restrict: 'E'
      };
  
      return navegacion;
    }
  })();