function SelectClassController(UserService,$state,$rootScope,$stateParams){
	 let vm = this
	 vm.classOptions = []

	vm.listclasses = function(){
	 	UserService.getClasses().then(
	 		resp =>{
	 			vm.classOptions = resp.data;

	 		})
	 }
	 vm.listclasses();

	 vm.selectclass = function(clazz){
	 	UserService.addclasstoUser(clazz).then(
	 		resp =>{

	 			 $state.go('root.user.class.about',{id:resp.data.class_id});

	 		}, error => { console.log(error); })
	 }
	 

}

SelectClassController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export { SelectClassController };
