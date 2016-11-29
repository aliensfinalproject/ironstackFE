function routerConfig ($stateProvider, $urlRouterProvider) {
 $stateProvider
   .state('root', {
     abstract: true,
     templateUrl: 'templates/layout.tpl.html',
     //controller: 'LayoutController as layout'
   })
   .state('root.main', {
     url: '/main',
     templateUrl: 'templates/main.tpl.html',
    //  controller: 'NewsfeedController as newsfeed'
   })
   .state('root.register', {
     url: '/register',
     templateUrl: 'templates/register.tpl.html',
     controller: 'RegisterController as register'
   })
   /*.state('root.login', {
     url: '/login',
     templateUrl: 'templates/login.tpl.html',
     controller: 'LoginController as login'
   })*/

   .state('user',{
      abstract: true,
      templateUrl: 'templates'
   })
   .state('user.home'{
    url:'/home',
    templateUrl: 'templates/home.tpl.html'
   })
   .state('user.class'{
    url: '/class',
    templateUrl: 'templates/class.tpl.html'
   })

 $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
