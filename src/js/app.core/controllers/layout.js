function LayoutController ($rootScope, UserService) {
  let vm = this;

  vm.admin = UserService.isAdmin();
  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    vm.admin = UserService.isAdmin();
  });

  function logout () {
    UserService.logout();
    vm.loggedIn = false;
    vm.admin = false;
  }

};

LayoutController.$inject = ['$rootScope', 'UserService'];
export { LayoutController };
