function LayoutController ($rootScope, UserService, $cookies) {
  let vm = this;

  vm.admin = UserService.isAdmin();
  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;
  vm.classId = $cookies.get('classId');


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

LayoutController.$inject = ['$rootScope', 'UserService', '$cookies'];
export { LayoutController };
