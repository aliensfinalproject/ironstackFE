function AboutController(UserService,$state,$rootScope,$stateParams,$http){
	let vm = this
	vm.post = {}
	vm.posts = [];
	vm.id = $stateParams.id;
	vm.assignments = [];

	vm.user={};
	vm.classOptions = []
	vm.className=""
	vm.classID=""

	vm.user= UserService.isAdmin();
	vm.questions = [];
	vm.videos = [];
	vm.codes = [];
	vm.statuses = [];

	function getAssignments () {
		console.log('hi there')
		UserService.getAssignments($stateParams.id).then(
			resp =>{
				vm.assignments = resp.data;
				console.log (resp.data)

			}).catch(error=>{ console.log(error)})
	}

	vm.createPost = function(){
		UserService.addPost(vm.post, $stateParams.id).then(
			resp =>{

				vm.post = resp.data
				vm.classID = vm.posts[0].class_id
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

				vm.posts = resp.data
				vm.classID = vm.posts[0].class_id

				vm.questions = vm.posts.filter(function(post){
					return post.category === 'question';
				})
				vm.videos = vm.posts.filter(function(post){
					return post.category === 'video';
				})
				vm.codes = vm.posts.filter(function(post){
					return post.category === 'code';
				})
				vm.statuses = vm.posts.filter(function(post){
					return post.category === 'status';
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


vm.listclasses = function(){
	 	UserService.getClasses().then(
	 		resp =>{
	 			vm.classOptions = resp.data;
	 			for(let i =0; i<vm.classOptions.length;i++){
	 				if(vm.classID == vm.classOptions[i].id)
	 				vm.className = vm.classOptions[i].className

	 			}

	 		})
}

function init () {
	vm.readPost();
	vm.listclasses();
	getAssignments();
}

init();

}

AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$http'];
export { AboutController };
