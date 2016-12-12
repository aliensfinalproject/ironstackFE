function AboutController(UserService,$state,$rootScope,$stateParams,$http){
	let vm = this
	vm.post = {}
	vm.posts = [];

	vm.createPost = function(){
		UserService.addPost(vm.post, $stateParams.id).then(
			resp =>{
				vm.post = resp.data
				$http({
					method: 'POST',
					url:'https://hooks.slack.com/services/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',
					data: {"text":"New Post: " + vm.post.title + " <http://localhost:8081/#/class/postDetails/"+ vm.post.class_id + "/" + vm.post.id + ">"},
					headers: {
						'content-type': undefined
					}
				})
				vm.readPost();
				vm.post={}
			})


	}

	vm.readPost = function(){
		UserService.getPosts($stateParams.id).then(
			resp => {
				console.log(resp)
				vm.posts = resp.data

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


AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$http'];
export { AboutController };