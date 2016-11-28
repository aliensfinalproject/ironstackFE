function RegisterController (UserService, $state) {

  let vm = this;

  vm.createUser = createUser;

  function createUser (user) {
    console.log ('hello')
    UserService.create(user).then((resp) => {

      console.log(' : ', resp);
      $state.go('root.home');
    }, function test (error){
      console.log(error)
    });

  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };
