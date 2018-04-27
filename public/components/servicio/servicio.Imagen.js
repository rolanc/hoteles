(() => {
    'use strict';
    angular
    .module('RoloTravel')
    .service('servicioImagen', servicioImagen);
  
    servicioImagen.$inject = ['$http'];
  
    function servicioImagen($http){
      const cloudObj = {
        url:'https://api.cloudinary.com/v1_1/druu90wsq/image/upload',
        data:{
          upload_preset: 'RoloTravel',
          tags:'Any',
          context:'photo=test'
        }
      };
  
      const uploadAPI = {
        getConfiguration : _getConfiguration
      };
      return uploadAPI;
  
      function _getConfiguration() {
        return cloudObj;
      }
    };
  })();