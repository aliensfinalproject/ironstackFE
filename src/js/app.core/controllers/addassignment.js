function AddAssignmentController(UserService,$state,$rootScope,$scope){
    let vm = this;
   vm.list = [];

   vm.createassignment = function(assignment){
	 	UserService.createAssignment(assignment).then(
	 		resp => {
	 			$state.go('root.user.addassignment')
	 		})
	 }


}
AddAssignmentController.$inject = ['UserService', '$state', '$rootScope','$scope'];

export { AddAssignmentController };
