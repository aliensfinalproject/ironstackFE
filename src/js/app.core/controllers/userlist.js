function UserListController(UserService,$state,$rootScope){

	let vm = this
	vm.listusers = [];

	vm.displayUsers = function(){
		UserService.getUsers().then(
			resp =>{ 
			console.log(resp);
			vm.listusers = resp.data;
			})
	}
	vm.displayUsers();

	vm.deleteUser = function(userid){
		UserService.deleteUser().then(
			resp =>{
				$state.go('root.user.class.list')
			})

	}
}






UserListController.$inject = ['UserService', '$state', '$rootScope'];
export { UserListController };