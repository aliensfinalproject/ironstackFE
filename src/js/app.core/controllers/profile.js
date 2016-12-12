function ProfileController (UserService, $state, $rootScope) {
  let vm = this
  vm.userprofile = {}

  vm.createProfile = function(user){
    UserService.userProfile(user).then(
      resp => {
        console.log(resp)
        vm.userprofile = resp.data
      })
  }
  

}

ProfileController.$inject = ['UserService', '$state', '$rootScope'];
export { ProfileController };
