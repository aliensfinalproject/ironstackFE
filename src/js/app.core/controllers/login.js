function LoginController (UserService, $state, $rootScope) {
  let vm = this;
   vm.loggedInUser ={}

  vm.activate = activate;

  function activate (user) {
    UserService.login(user).then(
      resp => {
        UserService.setUser(resp.data);
        $rootScope.$broadcast('loginChange', {});
         vm.loggedInUser = resp.data
         console.log(vm.loggedInUser);
         if(vm.loggedInUser.admin == true){
          $state.go('root.user.class.list');
        } else if(vm.loggedInUser.class_id){
            $state.go('root.user.class.about',{id:vm.loggedInUser.class_id});
        } else {
          $state.go('root.user.selectclass')

        }
        
      },
      errors => {
        console.log(errors.data.error);
        vm.error = errors.data.error
      }
    );
  };

};

LoginController.$inject = ['UserService', '$state', '$rootScope'];
export { LoginController };
