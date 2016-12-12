function HomeController(UserService,$state,$rootScope){
	let vm =this
	vm.userposts = [];

	vm.displayPosts = function(){
		UserService.userPost().then(
			resp =>{
				vm.userposts = resp.data
			})
	}
	vm.displayPosts();

	vm.removePost = function(class_id,post_id){
		console.log(class_id)
		UserService.deletePost(class_id,post_id).then(

			resp =>{
				vm.displayPosts();

			})
	}
	vm.backToClass = function(class_id){
		console.log('hi')
		$state.go('root.user.class.about',{id:class_id})
	}
}


HomeController.$inject = ['UserService', '$state', '$rootScope'];
export { HomeController };