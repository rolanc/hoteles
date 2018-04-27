(() => {
    'use strict';
    angular
      .module('RoloTravel')
      .controller('controladorRegistrarCliente', controladorRegistrarCliente);
  
      controladorRegistrarCliente.$inject = ['servicioUsuarios']; 
  
    function controladorRegistrarCliente(servicioUsuarios) {
      let vm = this;
        
      vm.nuevoUsuario = {};
      

      vm.registrarUsuario = (pnuevoUsuario) => {
        pnuevoUsuario.rol = 2;

        let nuevoUsuario = Object.assign(new Clientes(), pnuevoUsuario);
        let success = servicioUsuarios.setUsuario(pnuevoUsuario); 

        console.log(pnuevoUsuario)

        if (success == true){
            swal({
                tittle: "Registro exitoso",
                text: "Usuario registrado correctamente",
                icon: "success",
                button: "Aceptar",
            });
            vm.nuevoUsuario = null;
        }else{
            swal({
                tittle: "Registro fallido",
                text: "Usuario no ha podido ser registrado. Inténtelo de nuevo más tarde",
                icon: "error",
                button: "Aceptar"
            })
        }
      }
      
    }
  })();