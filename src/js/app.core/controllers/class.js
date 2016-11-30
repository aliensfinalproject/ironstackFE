function ClassController(UserService,$state,$rootScope,$scope){
	console.log('hi')

	 let vm = this;
	 vm.listOfClass = [];

	 function listOfClass(){
	 	UserService.getClass().then(
	 		resp =>{
	 			console.log(resp);
	 			vm.listOfClass = resp.data;

	 		})
	 }
	 listOfClass();

	 $scope.addClass = function(){

	 }


}
ClassController.$inject = ['UserService', '$state', '$rootScope','$scope'];
export { ClassController };