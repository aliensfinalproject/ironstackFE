function AboutAssignmentsController(UserService,$state,$rootScope,$stateParams){
	let vm = this
	vm.post = {}
	vm.posts = [];
  vm.id = $stateParams.id;
	vm.postDetails ={};
	vm.comments =[];
	vm.count="";
	vm.showComments = false;

	vm.questions = [];
	vm.videos = [];
	vm.codes = [];
	vm.statuses = [];

		vm.getPostDetails = function(){
			UserService.getPost($stateParams.id,$stateParams.id).then(
				resp => {
					vm.postDetails = resp.data
					var str = vm.postDetails.content
					var breakCode = str.split("=");
					var reqdCode = breakCode[1];
					var base_url = "https://www.youtube.com/embed/"
					var video_url = base_url.concat(reqdCode);
					vm.display_url= $sce.trustAsResourceUrl(video_url)

					UserService.getComments($stateParams.id).then(
					resp => {
						vm.count = resp.data.length
					})

				})
		
		}
		// vm.getPostDetails();

		function readPost(){
			UserService.getPostAssignments($stateParams.id, $stateParams.assignment_id).then(
				resp => {

					vm.posts = resp.data
					vm.classID = vm.posts[0].class_id

					console.log("posts : ", vm.posts)

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
					console.log("questions : ", vm.questions)
					console.log("videos : ", vm.videos)
					console.log("codes : ", vm.codes)
					console.log("statuses : ", vm.statuses)
				}).catch(error => {

				})
		}
		readPost();
}

AboutAssignmentsController.$inject = ['UserService', '$state', '$rootScope','$stateParams'];
export { AboutAssignmentsController };
