function ClassAddController(UserService,$state,$rootScope,$scope){
	let vm = this;

	 vm.createclass = function(clazz){
	 	UserService.addingClass(clazz).then(
	 		resp => {
	 			$state.go('root.user.class.list')
	 		})
	 }

}
ClassAddController.$inject = ['UserService', '$state', '$rootScope','$scope'];
export { ClassAddController };