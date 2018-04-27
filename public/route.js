(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('landingPage', {
                url: '/',
                templateUrl: './components/landingPage/landingPage.view.html',
                data: {
                    pageTitle: 'Rolo Travel'
                }
            })

            .state('inicioSesion', {
                url: '/login',
                templateUrl: './components/InicioSesion/inicioSesion.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/InicioSesion/inicioSesion.controller.js')
                    }]
                },
                controller: 'inicioSesion',
                controllerAs: 'vm'
            })

            .state('registroUsuarios', {
                url: '/registerUser',
                templateUrl: './components/usuarios/Cliente/registrarCliente/registrarCliente.view.html',
                data: {
                    pageTitle: 'Registro de usuarios | Rolo Travel'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/registrarCliente/registrarCliente.controller.js')
                    }]
                },
                controller: 'controladorRegistrarCliente',
                controllerAs: 'vm'
            })

            .state('main', {
                url: '/main',
                templateUrl: './components/main/main.view.html',
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'controladorMain',
                controllerAs: 'vm'
            })

            .state('main.registrarHotel', {
                url: '/registerHotel',
                templateUrl: './components/hoteles/registrarHotel/registrarHotel.view.html',
                data: {
                    pageTitle: 'Registro de hoteles | Rolo Travel'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/registrarHotel/registrarHotel.controller.js')
                    }]
                },
                controller: 'ControladorRegistrarHotel',
                controllerAs: 'vm'
            })

            .state('main.listarHotel', {
                url: '/listHotel',
                templateUrl: './components/hoteles/ListarHotel/listarHotel.view.html',
                data: {
                    pageTitle: 'Lista de hoteles | Rolo Travel'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/ListarHotel/listarHotel.controller.js')
                    }]
                },
                controller: 'controladorListarHotel',
                controllerAs: 'vm'
            })

            .state('main.modificarHoteles', {
                url: '/modifyHotel',
                templateUrl: './components/hoteles/modificarHotel/modificarHotel.view.html',
                data: {
                    pageTitle: 'Modificar hoteles | Rolo Travel'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/modificarHotel/modificarHotel.controller.js')
                    }]
                },
                params: {
                    idHotel: ''
                },
                controller: 'controladorModificarHotel',
                controllerAs: 'vm'
            })

            .state('main.listarUsuarios', {
                url: '/listUsers',
                templateUrl: './components/usuarios/Cliente/listarCliente/listarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/listarCliente/listarCliente.controller.js')
                    }]
                },
                params: {
                    idCliente: ''
                },
                controller: 'controladorListaUsuarios',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/');
    }

})();