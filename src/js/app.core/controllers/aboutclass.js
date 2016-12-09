function AboutController(UserService,$state,$rootScope,$stateParams,$http){
	let vm = this
	vm.post = {}
	vm.posts = [];
	vm.user={};
	vm.classOptions = []
	vm.className=""
	vm.classID=""
	

	vm.user= UserService.isAdmin();

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
				
				vm.posts = resp.data
				vm.classID = vm.posts[0].class_id
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
vm.listclasses();
}


AboutController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$http'];
export { AboutController };