function ClassController(UserService,$state,$rootScope){

	 let vm = this;
	 vm.list = [];
	 vm.isAdmin = UserService.isAdmin()

	 console.log('authorized? ', vm.isAdmin)

	 vm.listclasses = function(){
	 	UserService.getClasses().then(
	 		resp =>{
	 			console.log(resp);
	 			vm.list = resp.data;

	 		})
	 }
	 vm.listclasses();




}
ClassController.$inject = ['UserService', '$state', '$rootScope'];
export { ClassController };
