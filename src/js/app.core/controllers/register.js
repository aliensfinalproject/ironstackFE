function RegisterController (UserService, $state) {

  let vm = this;

  vm.createUser = createUser;

  function createUser (user) {
    UserService.create(user).then((resp) => {
      console.log('Created User: ', resp);
      $state.go('root.home');
    });
  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };
