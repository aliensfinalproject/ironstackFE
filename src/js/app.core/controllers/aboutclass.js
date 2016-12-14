
import moment from 'moment';

function AboutController(UserService,$state,$rootScope,$stateParams,$http){
	let vm = this
	vm.post = {}
	vm.posts = [];
	vm.id = $stateParams.id;
	vm.assignments = [];
	vm.isAdmin = UserService.isAdmin();
	vm.user={};
	vm.classOptions = []
	vm.className=""
	vm.classID=""
	vm.questions = [];
	vm.videos = [];
	vm.codes = [];
	vm.statuses = [];

	vm.date =""
	vm.date=[]

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
			// vm.post.class_id = Number($stateParams.id);
			resp =>{
				console.log(resp.data)
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
		console.log('not numb ', Number($stateParams.id) == 'NaN')
		if (Number($stateParams.id)) UserService.getPosts($stateParams.id).then(
			resp => {

				vm.posts = resp.data
				vm.classID = vm.posts[0].class_id
				/*for(let i=0 ; i<vm.posts.length;i++){
					vm.storeddate = vm.posts[i].created_at
					vm.date = moment(vm.storeddate).format('MMMM Do YYYY')
					console.log(vm.date)

				}*/



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
		console.log('inside init')
		console.log('vm.id is', vm.id)
		console.log(!Number(vm.id), typeof(Number(vm.id)) === 'number')
		  if (!vm.id || !Number(vm.id)) {
				$state.go('root.error');
			}	else {
		    vm.readPost();
		    vm.listclasses();
		    getAssignments();
			}
	}

	init();

}


// function init () {
//
// 			vm.readPost();
// 			vm.listclasses();
// 			getAssignments();
//
// }
//
// init();
//
// }

AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$http'];
export { AboutController };
