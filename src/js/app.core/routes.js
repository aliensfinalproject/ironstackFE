function routerConfig ($stateProvider, $urlRouterProvider) {
 $stateProvider
   .state('root', {
     abstract: true,
     templateUrl: 'templates/layout.tpl.html',
    //  controller: 'LayoutController as layout'
   })
   .state('root.home', {
     url: '/home',
     templateUrl: 'templates/home.tpl.html',
    //  controller: 'ProductsController as products'
   })
   .state('root.register', {
     url: '/register',
     templateUrl: 'templates/register.tpl.html',
     controller: 'RegisterController as register'
   })
   .state('root.login', {
     url: '/login',
     templateUrl: 'templates/login.tpl.html',
     controller: 'LoginController as login'
   })

 $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
