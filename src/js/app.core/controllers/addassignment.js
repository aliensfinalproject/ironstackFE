function AddAssignmentController(UserService,$state,$rootScope,$scope, $stateParams){
    let vm = this;
   vm.list = [];
   ;

   vm.addassignment = function(assignment){
	 	UserService.addAssignment(assignment).then(
	 		resp => {
        assignment.class_id = $stateParams._id
        console.log(resp.data)
        console.log ()
	 			$state.go('root.user.addassignment')
	 		})
	 }


}
AddAssignmentController.$inject = ['UserService', '$state', '$rootScope','$scope', '$stateParams'];

export { AddAssignmentController };
