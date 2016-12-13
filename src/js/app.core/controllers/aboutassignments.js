import moment from 'moment';
function AboutAssignmentsController(UserService,$state,$rootScope,$stateParams){
	let vm = this
	vm.post = {}
	vm.posts = [];
  vm.id = $stateParams.id;
	vm.postDetails ={};
	vm.comments =[];
	vm.count="";
	vm.showComments = false;
	vm.isAdmin = UserService.isAdmin();

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
					for(let i=0 ; i<vm.questions.length;i++){
					 vm.questions[i].created_at = moment(vm.questions[i].created_at).format('MMMM Do YYYY')

					}

					vm.videos = vm.posts.filter(function(post){
						return post.category === 'video';
					})
					for(let i=0 ; i<vm.videos.length;i++){
					 vm.videos[i].created_at = moment(vm.videos[i].created_at).format('MMMM Do YYYY')

					}
					vm.codes = vm.posts.filter(function(post){
						return post.category === 'code';
					})
					for(let i=0 ; i<vm.codes.length;i++){
					 vm.codes[i].created_at = moment(vm.codes[i].created_at).format('MMMM Do YYYY')

					}
					vm.statuses = vm.posts.filter(function(post){
						return post.category === 'status';
					})
					for(let i=0 ; i<vm.statuses.length;i++){
					 vm.statuses[i].created_at = moment(vm.statuses[i].created_at).format('MMMM Do YYYY')

					}
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
