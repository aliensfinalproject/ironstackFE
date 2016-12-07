function AboutController(UserService,$state,$rootScope,$stateParams){
	let vm = this
	vm.post = {}
	vm.posts = [];
	vm.questions = [];
	vm.videos = [];

	vm.createPost = function(){
		UserService.addPost(vm.post, $stateParams.id).then(
			resp =>{
				vm.post = resp.data
				vm.readPost();
				vm.post={}
			})


	}
	vm.readPost = function(){
		UserService.getPosts($stateParams.id).then(
			resp => {
				console.log(resp)
				vm.posts = resp.data
				vm.questions = vm.posts.filter(function(post){
					return post.category === 'question';
				})
				vm.videos = vm.posts.filter(function(post){
					return post.category === 'video';
				})
			

			})
	}
	vm.readPost();
	vm.removePost = function(class_id,id){
		UserService.deletePost(class_id,id).then(
			resp =>{
				vm.readPost();
			})

}
}


AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export { AboutController };
