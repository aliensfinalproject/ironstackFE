function PostDetailsController(UserService,$state,$rootScope,$stateParams){
	let vm = this;
	vm.postDetails ={}
	console.log('hi');

	vm.getPostDetails = function(){
		console.log('hello');
		UserService.getPost($stateParams.class_id,$stateParams.id).then(
			resp => {
				console.log('namaste');
				console.log(resp);
				vm.postDetails = resp.data

			})

	}
	vm.getPostDetails();
}
PostDetailsController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export{ PostDetailsController };