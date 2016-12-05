function HomeController(UserService,$state,$rootScope){
	let vm =this
	vm.userposts = []
	vm.displayPosts = function(){
		UserService.userPost().then(
			resp =>{
				console.log(resp)
				vm.userposts = resp.data
			})
	}
	vm.displayPosts();

	vm.removePost = function(class_id,post_id){
		UserService.deletePost(class_id,post_id).then(
			resp =>{
				console.log(resp)
				vm.displayPosts();

			})
	}
}


HomeController.$inject = ['UserService', '$state', '$rootScope'];
export { HomeController };