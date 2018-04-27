(() => {
    'use strict';
    angular
      .module('RoloTravel')
      .controller('controladorListarHotel', controladorListarHotel);
  
      controladorListarHotel.$inject = ['$http', '$stateParams', '$state', 'ServicioHotel']; 
  
    function controladorListarHotel($http, $stateParams, $state, ServicioHotel) {
      let vm = this;
  
      vm.provincias = $http({
        method: 'GET',
        url: './sources/data/provincias.json'
        }).then( (success) => {
          vm.provincias = success.data;
        }, (error) => {
      });
  
      vm.rellenarCantones = (pidProvincia) => {
        vm.cantones = $http({
          method: 'GET',
          url: './sources/data/cantones.json'
        }).then((success) => {
          let cantones = [];
          for (let i = 0; i < success.data.length; i++) {
            if (pidProvincia == success.data[i].idProvincia) {
              cantones.push(success.data[i]);
            }
          }
          vm.cantones = cantones;
        }, (error) => {
        });
      }
  
      vm.rellenarDistrito = (pidCanton) => {
        vm.distritos = $http({
          method: 'GET',
          url: './sources/data/distritos.json'
        }).then((success) => {
          let distritos = [];
          for (let i = 0; i < success.data.length; i++) {
            if (pidCanton == success.data[i].idCanton) {
              distritos.push(success.data[i]);
            }
          }
          vm.distritos = distritos;
        }, (error) => {
        });
      }
  
      vm.listaHoteles = ServicioHotel.getHotel();

      vm.filtarListaPorTIpo = (tipoHotel) => {
        vm.listaHoteles = ServicioHotel.getHotelesPorTipo(tipoHotel);
      }

      vm.verHotel = (hotel) => {
        $state.go('main.verHotel', {idHotel: hotel.getId()})
      }

      vm.editar = (hotel) => {
        $state.go('main.modificarHoteles', {idHotel: hotel.getId()})
      }
      
    }
  })();