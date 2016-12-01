function ClassAddController(UserService,$state,$rootScope,$scope){
	let vm = this;

	 vm.createclass = function(clazz){
	 	console.log('hi')
	 	UserService.addingClass(clazz).then(
	 		resp => {
	 			console.log(resp)
	 			$state.go('root.user.class.list')
	 		})
	 }

}
ClassAddController.$inject = ['UserService', '$state', '$rootScope','$scope'];
export { ClassAddController };