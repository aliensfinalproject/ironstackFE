function run ($rootScope, $state, UserService) {

  $rootScope.$on('$stateChangeStart', (event, toState) => {

    if (invalidRoute(toState)) {
      event.preventDefault();
      $state.go('root.main.login');
    }

  });

  function invalidRoute (toState) {
    let loggedIn = UserService.isLoggedIn();
    let safeRoutes = ['root.main.login', 'root.main.register', 'root.marketing'];

    return !(loggedIn || safeRoutes.includes(toState.name));
  };

};

run.$inject = ['$rootScope', '$state', 'UserService'];
export { run };
