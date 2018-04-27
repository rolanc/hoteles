(() => {
    'use strict';
    angular
        .module('RoloTravel')
        .directive('menuLateral', menuLateral);

    function menuLateral() {
        let sidebar = {
            templateUrl: '/components/directives/sidebar/sidebar.html',
            restrict: 'EA'
        };

        return sidebar;
    }
})();