(() => {
    'use strict'
    angular
    .module('RoloTravel')
    .controller('landingPageController', landingPageController);
  
    landingPageController.$inject = ['$document'];
  
    function landingPageController($document){
      const top = 400,
            duration = 2000;
  
      const vm = this;
  
      vm.toTheTop = () => {
        $document.scrollTopAnimated(0, 1000);
      }

      $document.on('scroll', ()=>{
        if($(window).scrollTop() > 300) {
          angular.element('#estilosMenu nav').addClass('bg-black');
        }else {
          angular.element('#estilosMenu nav').removeClass("bg-black");
        }
      });
    }
  })();