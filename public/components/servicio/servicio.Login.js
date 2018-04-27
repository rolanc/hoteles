(() => {
    'use strict';
    angular.module('RoloTravel').service('loginService', loginService);

    loginService.$inject = ['servicioUsuarios', 'dataStorageFactory'];

    function loginService(servicioUsuarios, dataStorageFactory) {
        const loginAPI = {
            logIn: _logIn,
            logOut: _logOut,
            getAuthUser: _getAuthUser
        };
        return loginAPI;




        function _logIn(pdatos) {
            let userList = servicioUsuarios.getUsuario(),
                success = false;

            for (let i = 0; i < userList.length; i++) {
                if (userList[i].getCorreo() === pdatos.correo && userList[i].getContrasenna() === pdatos.contrasenna) {
                    let datosCorrect = {
                        id: userList[i].getCedula(),
                        rol: userList[i].getRol()
                    }
                    success = dataStorageFactory.setSession(datosCorrect);
                }
            }
            return success;
        }



        function _logOut() {
            let success = dataStorageFactory.closeSession();
            return success;
        }




        function _getAuthUser() {
            let activeSession = dataStorageFactory.getSession(),
                userData;

            if (!activeSession) {
                userData = undefined;
            } else {
                userData = obtenerDatosUsuarioActivo(activeSession.id);
            }

            return userData;
        }



        

        function obtenerDatosUsuarioActivo(pcedula) {
            let userList = servicioUsuarios.getUsuario(),
                userData;

            for (let i = 0; i < userList.length; i++) {
                if (userList[i].getCedula() == pcedula) {
                    userData = userList[i];
                }
            };

            return userData;
        }
    }
})();