function UserListController(UserService,$state,$rootScope,$stateParams){

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

	vm.removeUser = function(user_id){
		console.log('hello')
		UserService.deleteUser(user_id).then(
			resp =>{
				vm.listusers = vm.listusers.filter(user => {
					return user.id != user_id;
				})
			})
	}

	vm.makeAdmin = function(user, user_id){
		console.log('hi, user id is: ', user_id)
		UserService.addAdmin(user, user_id).then(
			resp => {
				console.log(resp);
			})
	}
}






UserListController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export { UserListController };