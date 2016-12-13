function LayoutController ($rootScope, UserService) {
  let vm = this;

  vm.admin = UserService.isAdmin();
  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;
  vm.userProfile = {};

  UserService.getuserProfile().then(function(resp) {
    vm.userProfile = resp.data;
  })

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    vm.admin = UserService.isAdmin();
    UserService.getuserProfile().then(function(resp) {
      vm.userProfile = resp.data;
    })
  });

  function logout () {
    UserService.logout();
    vm.loggedIn = false;
    vm.admin = false;
  }

};

LayoutController.$inject = ['$rootScope', 'UserService'];
export { LayoutController };
