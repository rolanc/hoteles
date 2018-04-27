(()=>{
    'use strict';
    angular
    .module ('RoloTravel')
    .factory ('dataStorageFactory', dataStorageFactory);

    function dataStorageFactory(){
        const dataAPI = {
            setUserData : _setUserData,
            getUserData : _getUserData,
            setHotelData: _setHotelData,
            getHotelData: _getHotelData,
            updateHotelData : _updateHotelData,
            setSession: _setSession,
            closeSession: _closeSession,
            getSession: _getSession
        }

        return dataAPI;

        function _setUserData(userData) {
            let response;

            let request = $.ajax({
                url: 'http://localhost:4000/api/save_user',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'primerNombre' : userData.primerNombre, 
                    'segundoNombre' : userData.segundoNombre, 
                    'primerApellido' : userData.primerApellido,  
                    'segundoApellido' : userData.segundoApellido, 
                    'cedula' : userData.cedula, 
                    'correo' : userData.correo, 
                    'contrasenna' : userData.contrasenna, 
                    'rol' : userData.rol,
                    'edad' : userData.edad,
                    'telefono' : userData.telefono
                }
            });

            request.done((res) => {
                response = res.success;
                console.log(res.msj);
            });
            request.fail((error) => {
                response = error;
                console.log('Ocurrió un error');
            });

            return response;
        }

        function _getUserData (){
            let listaUsuarios = [];
            
            let request = $.ajax({
                url: 'http://localhost:4000/api/get_all_users',
                type: 'get',
                contentType: 'aplication/x-www-form-urlencoded;charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}
            });

            request.done ((userListBD) => {
                listaUsuarios = userListBD;
            })

            request.fail(()=> {
                listaUsuarios = [];
                console.log ('Ocurrió un error');
            });
            return listaUsuarios; 
        }

        function _setHotelData(hotelData) {
            let response;

            let request = $.ajax({
                url: 'http://localhost:4000/api/save_hotel',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'tipoHotel' : hotelData.tipoHotel,
                    'nombreHotel' : hotelData.nombreHotel,
                    'foto' : hotelData.foto,
                    'latitud' : hotelData.latitud,
                    'longitud' : hotelData.longitud,
                    'provincia' : JSON.stringify(hotelData.provincia),
                    'canton' : JSON.stringify(hotelData.canton),
                    'distrito' : JSON.stringify(hotelData.distrito),
                    'direccion' : hotelData.direccion,
                    'telefonoServicioCliente' : hotelData.telefonoServicioCliente,
                    'correoServicioCliente' : hotelData.correoServicioCliente,
                    'telefonoReservacion' : hotelData.telefonoReservacion,
                    'correoReservacion' : hotelData.correoReservacion
                }
            });

            request.done((res) => {
                response = res.success;
                console.log(res.msj);
            });
            request.fail((error) => {
                response = error;
                console.log('Ocurrió un error');
            });

            return response;
        }

        function _getHotelData(){
            let listaHoteles = [];
            
            let request = $.ajax({
                url: 'http://localhost:4000/api/get_all_hotels',
                type: 'get',
                contentType: 'aplication/x-www-form-urlencoded;charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}
            });

            request.done ((hotelsListBD) => {
                console.log('Datos que vienen desde la base de datos')
                console.log (hotelsListBD);
                listaHoteles = hotelsListBD;
            })

            request.fail(()=> {
                listaHoteles = [];
                console.log ('Ocurrió un error');
            });
            return listaHoteles; 
        }

        function _updateHotelData(hotelData) {
            let response;

            let request = $.ajax({
                url: 'http://localhost:4000/api/update_hotel',
                type: 'put',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    '_id' : hotelData._id,
                    'tipoHotel' : hotelData.tipoHotel,
                    'nombreHotel' : hotelData.nombreHotel,
                    'foto' : hotelData.foto,
                    'latitud' : hotelData.latitud,
                    'longitud' : hotelData.longitud,
                    'provincia' : JSON.stringify(hotelData.provincia),
                    'canton' : JSON.stringify(hotelData.canton),
                    'distrito' : JSON.stringify(hotelData.distrito),
                    'direccion' : hotelData.direccion,
                    'telefonoServicioCliente' : hotelData.telefonoServicioCliente,
                    'correoServicioCliente' : hotelData.correoServicioCliente,
                    'telefonoReservacion' : hotelData.telefonoReservacion,
                    'correoReservacion' : hotelData.correoReservacion
                }
            });

            request.done((res) => {
                response = res.success;
                console.log(res.msj);
            });
            request.fail((error) => {
                response = error;
                console.log('Ocurrió un error');
            });

            return response;
        }

        //-----------------------Login Function-----------------------------------------------

        function _setSession(value) {
            let response = true;
            sessionStorage.setItem('session', JSON.stringify(value));
            return response;
        }

        function _closeSession() {
            let response = true;
            sessionStorage.removeItem('session');
            return response;
        };

        function _getSession() {
            let sessionActive = JSON.parse(sessionStorage.getItem('session'));
            return sessionActive;
        }
    }
})();
