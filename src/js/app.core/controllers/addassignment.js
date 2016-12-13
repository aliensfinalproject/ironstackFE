function AddAssignmentController(UserService,$state,$rootScope,$scope, $stateParams){
    let vm = this;
    vm.id = $stateParams.id;
    vm.isAdmin = UserService.isAdmin();

    function init(){
        if (!vm.id || !Number(vm.id)) $state.go('root.error');
    }
    init();

   vm.addassignment = function(assignment){
     assignment.class_id = Number($stateParams.id);
     console.log(assignment);
	 	UserService.addAssignment(assignment).then(
	 		resp => {
        console.log(resp.data)
        // state.go('root.user.class.about')
	 		})
	 }

}
AddAssignmentController.$inject = ['UserService', '$state', '$rootScope','$scope', '$stateParams'];

export { AddAssignmentController };
