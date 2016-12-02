function AboutController(UserService,$state,$rootScope,$stateParams){
	let vm = this
	vm.post = {}
	vm.posts = [];

	vm.createPost = function(){
		UserService.addPost(vm.post, $stateParams.id).then(
			resp =>{
				vm.post = resp.data
				vm.readPost();
				vm.post={}
			})


	}
	vm.readPost = function(){
		UserService.getPost($stateParams.id).then(
			resp => {
				vm.posts = resp.data

			})
	}
	vm.readPost();
	
}


AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export { AboutController };