function EnabledAssignmentsController(UserService,$state,$rootScope,$scope){
	let vm = this;
   vm.list = [];


   vm.listassignments = function(){
    UserService.getAssignments().then(
      resp =>{
        vm.list = resp.data;
        console.log (resp.data)

      }).catch(error=>{ console.log(error)})
   }
   vm.listassignments();


   vm.deleteassignment = function(id) {
     UserService.deleteAssignment(id).then(
         resp =>{
           vm.listassignments();
         })
   }


   vm.updateassignment = function(id) {
     UserService.updateAssignment(id).then(
         resp =>{
           vm.updateassignments();
         })
   }


}
EnabledAssignmentsController.$inject = ['UserService', '$state', '$rootScope','$scope'];

export { EnabledAssignmentsController };
