import moment from 'moment';
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

				vm.questions = vm.userposts.filter(function(userpost){
					return userpost.category === 'question';
				})
				for(let i=0; i<vm.questions.length; i++){
					vm.questions[i].created_at = moment(vm.questions[i].created_at).format('MMMM Do YYYY')
				}

				vm.videos = vm.userposts.filter(function(userpost){
					return userpost.category === 'video';
				})
				for(let i=0; i<vm.videos.length; i++){
					vm.videos[i].created_at = moment(vm.videos[i].created_at).format('MMMM Do YYYY')
				}

				vm.codes = vm.userposts.filter(function(userpost){
					return userpost.category === 'code';
				})
				for(let i=0; i<vm.codes.length; i++){
					vm.codes[i].created_at = moment(vm.codes[i].created_at).format('MMMM Do YYYY')
				}

				vm.statuses = vm.userposts.filter(function(userpost){
					return userpost.category === 'status';
				})
				for(let i=0; i<vm.statuses.length; i++){
					vm.statuses[i].created_at = moment(vm.statuses[i].created_at).format('MMMM Do YYYY')
				}

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
