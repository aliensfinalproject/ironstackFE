import moment from 'moment';

function ClassController(UserService,$state,$rootScope){

	 let vm = this;
	 vm.list = [];
	 vm.isAdmin= UserService.isAdmin();



	 vm.listclasses = function(){
	 	UserService.getClasses().then(
	 		resp =>{

	 			vm.list = resp.data;
				for(let i=0 ; i<vm.list.length;i++){
				 vm.list[i].startDate = moment(vm.list[i].startDate).format('MMMM Do YYYY')

	 		}
		})
	 }
	 vm.listclasses();




}
ClassController.$inject = ['UserService', '$state', '$rootScope'];
export { ClassController };
