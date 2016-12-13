function HomeController(UserService,$state,$rootScope){
	let vm =this
	vm.userposts = [];
	vm.questions = [];
	vm.videos = [];
	vm.codes = [];
	vm.statuses = [];

	vm.displayPosts = function(){
		UserService.userPost().then(
			resp =>{
				vm.userposts = resp.data

				vm.questions = vm.userposts.filter(function(post){
					return post.category === 'question';
				})
				vm.videos = vm.userposts.filter(function(post){
					return post.category === 'video';
				})
				vm.codes = vm.userposts.filter(function(post){
					return post.category === 'code';
				})
				vm.statuses = vm.userposts.filter(function(post){
					return post.category === 'status';
				})
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
