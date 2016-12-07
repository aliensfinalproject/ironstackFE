function AddAssignmentController(UserService,$state,$rootScope,$scope, $stateParams){
    let vm = this;
   vm.list = [];
   ;

   vm.addassignment = function(assignment ){
	 	UserService.addAssignment(assignment, $stateParams).then(
	 		resp => {
        assignment.class_id = $stateParams.id
        console.log(resp.data)
        console.log ($stateParams.id)
	 			$state.go('root.user.class.about.addassignment')
	 		})
	 }


}
AddAssignmentController.$inject = ['UserService', '$state', '$rootScope','$scope', '$stateParams'];

export { AddAssignmentController };
