(() => {
    'use strict';
    angular
    .module('RoloTravel', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate', 'ngMap'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();