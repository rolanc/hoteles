(() => {
    
    angular
    .module('RoloTravel')
    .service('ServicioHotel', ServicioHotel);

    ServicioHotel.$inject = ['$http', '$log', 'dataStorageFactory']

    function ServicioHotel($http, $log, dataStorageFactory) {
        const publicUserAPI = {
            setHotel: _setHotel,
            updateHotel: _updateHotel,
            getHotel: _getHotel,
            getHotelesPorTipo: _getHotelesPorTipo,
            getHotelPorId: _getHotelPorIDç
        }
        return publicUserAPI;





        function _setHotel(hotelData) {
            let hotelList = _getHotel(),
                repeat = false,
                success;

            for (let i = 0; i < hotelList.length; i++) {
                if (hotelList[i].getId() === hotelData.getId()) {
                    repeat = true;
                }
            }

            if (repeat == false) {
                success = dataStorageFactory.setHotelData(hotelData);
            } else {
                success = false;
            }

            return success;
        }







        function _getHotel() {
            let hotelData = dataStorageFactory.getHotelData(),
                hotelList = [];

            hotelData.forEach(obj => {
                let tempHotel = Object.assign(new Hotel(), obj);

                hotelList.push(tempHotel)
            });

            return hotelList;
        }
        function _updateHotel(hotelData) {
            let hotelList = _getHotel(),
                success;
            success = dataStorageFactory.updateHotelData(hotelData);
            return success;
        }


        function _getHotelesPorTipo(tipoHotel) {
            let listaHoteles = _getHotel(),
                listaFiltrada = [];

            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getTipoHotel() == tipoHotel) {
                    listaFiltrada.push(listaHoteles);
                }
            }
            return listaFiltrada;
        }
        function _getHotelPorIDç(idHotel) {
            let listaHoteles = _getHotel(),
                hotel;
            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getId() == idHotel) {
                    hotel = listaHoteles[i];
                }
            }
            return hotel;
        }

    }
})();