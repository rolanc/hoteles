(() => {
    'use strict';
    angular
        .module('RoloTravel')
        .controller('controladorModificarHotel', controladorModificarHotel);

    controladorModificarHotel.$inject = ['$http', '$stateParams', '$state', 'NgMap', 'ServicioHotel', 'servicioImagen', 'Upload'];

    function controladorModificarHotel($http, $stateParams, $state, NgMap, ServicioHotel, servicioImagen, Upload) {
        const vm = this;

        vm.provincias = $http({
            method: 'GET',
            url: './sources/data/provincias.json'
        }).then((success) => {
            vm.provincias = success.data;
        }, (error) => {
            console.log("Ocurrió un error " + error.data);
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
                console.log("Ocurrió un error " + error.data)
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
                console.log("Ocurrió un error " + error.data);
            });
        }

        NgMap.getMap("map").then((map) => {
            vm.map = map;
        });

        vm.getCurrentLocation = ($event) => {
            let postion = [$event.latLng.lat(), $event.latLng.lng()];
            console.log(postion);
            vm.current = postion;
        }

        if ($stateParams.idHotel == '') {
            $state.go('main.listarHotel');
        }

        let hotelPorEditar = ServicioHotel.getHotelPorId($stateParams.idHotel);

        vm.rellenarCantones(hotelPorEditar.getProvincia()._id);
        vm.rellenarDistrito(hotelPorEditar.getCanton()._id);

        vm.hotelPorModificar = {
            tipoHotel : hotelPorEditar.getTipoHotel(),
            nombreHotel : hotelPorEditar.getNombreHotel(),
            foto : hotelPorEditar.getFoto(),
            latitud : hotelPorEditar.latitud,
            longitud : hotelPorEditar.longitud,
            provincia : hotelPorEditar.getProvincia(),
            canton : hotelPorEditar.getCanton(),
            distrito : hotelPorEditar.getDistrito(),
            direccion : hotelPorEditar.getDireccion(),
            telefonoServicioCliente : hotelPorEditar.getTelefonoServicio(),
            correoServicioCliente : hotelPorEditar.getCorreoServicio(),
            telefonoReservacion : hotelPorEditar.getTelefonoReservacion(),
            correoReservacion : hotelPorEditar.getCorreoReservacion()
        }

        vm.cloudObj = servicioImagen.getConfiguration();

        vm.modificarHotel = (pnuevoHotel) => {
            pnuevoHotel._id = hotelPorEditar.getId();

            let nuevoHotel = Object.assign(new Hotel(), pnuevoHotel);

            let success = ServicioHotel.updateHotel(nuevoHotel);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El usuario se ha registrado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.hotelPorModificar = null;
                $state.go('main.listarHotel');
            } else {
                swal({
                    title: "Registro fallido",
                    text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                    icon: "error",
                    button: "Aceptar"
                });
            }
        }

    }
})();