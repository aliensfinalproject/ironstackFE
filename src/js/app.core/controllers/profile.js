function ProfileController (UserService, $state, $rootScope) {
  let vm = this
  vm.userprofile = {}

  vm.createProfile = function(user){
    UserService.userProfile(vm.userprofile).then(
      resp => {
        vm.userprofile = resp.data
      })
  }
  vm.getProfile = function(){
  	UserService.getuserProfile().then(
  		resp =>{
  			console.log(resp)
  			vm.userprofile = resp.data
  		})
  }
  vm.getProfile();
  

}

ProfileController.$inject = ['UserService', '$state', '$rootScope'];
export { ProfileController };
