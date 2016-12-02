function ClassController(UserService,$state,$rootScope){
	
	 let vm = this;
	 vm.list = [];

	 vm.listclasses = function(){
	 	UserService.getClasses().then(
	 		resp =>{
	 			vm.list = resp.data;

	 		})
	 }
	 vm.listclasses();
	 

	

}
ClassController.$inject = ['UserService', '$state', '$rootScope'];
export { ClassController };