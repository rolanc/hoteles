(()=>{
    'use stric'
    angular
    .module('RoloTravel')
    .service('servicioUsuarios', servicioUsuarios);

    servicioUsuarios.$inject = ['$http','$log', 'dataStorageFactory']

    function servicioUsuarios($http, $log, dataStorageFactory)
    {
        const publicUserAPI = {
            setUsuario : _saveUser,
            getUsuario : _getUser
        }

        return publicUserAPI;



        function _saveUser(userdata){
            let listaUsuarios = _getUser(),
                repeat = false,
                success;

            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].getCedula() == userdata.cedula){
                    repeat = true;
                }
            }

            if(repeat == false){
                success = dataStorageFactory.setUserData(userdata);
            }else{
                success = false;
            }

            return success;
        }




        function _getUser(){
            let userData = dataStorageFactory.getUserData(),
            listaUsuarios = [];

            userData.forEach(obj => {
                if (obj.rol == 1) {
                    let newAdmin = Object.assign(new Administrador(), obj);
                    listaUsuarios.push(newAdmin);
                } else {
                    let newClient = Object.assign(new Clientes(), obj);
                    listaUsuarios.push(newClient);
                }
            });

            return listaUsuarios;
        }




        
    }
  
})();