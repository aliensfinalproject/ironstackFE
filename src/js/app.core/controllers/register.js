function RegisterController (UserService, $state) {

  let vm = this;

  vm.createUser = createUser;

  function createUser (user) {
    UserService.create(user).then((resp) => {
     
      $state.go('root.user.selectclass');
    }, function test (error){
      console.log(error)
    });

  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };
