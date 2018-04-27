(() => {
    'use strict';
    angular
        .module('RoloTravel')
        .controller('controladorListaUsuarios', controladorListaUsuarios);

    controladorListaUsuarios.$inject = ['$http', '$stateParams', '$state', 'servicioUsuarios'];

    function controladorListaUsuarios($http, $stateParams, $state, servicioUsuarios) {
        let vm = this;

        vm.listaUsuarios = servicioUsuarios.getUsuario();

    }
})();