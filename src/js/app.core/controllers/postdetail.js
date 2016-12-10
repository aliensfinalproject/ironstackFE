function PostDetailsController(UserService,$state,$rootScope,$stateParams,$sce){
	let vm = this;
	vm.postDetails ={}
	vm.comments =[]
	vm.count="";
	vm.showComments = false;
	
	vm.getPostDetails = function(){
		UserService.getPost($stateParams.class_id,$stateParams.id).then(
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
	vm.getPostDetails();

	vm.createComment = function(comment){	
		UserService.addComment(comment, $stateParams.id).then(

			resp =>{ 
				
				vm.readComments();
				vm.comment ="";
			})
	}

	vm.readComments = function(){
		UserService.getComments($stateParams.id).then(
			resp => {
				vm.comments = resp.data
				vm.count = vm.comments.length
				vm.showComments = true;
				prettyPrint()
			})
	}
	//vm.readComments();

	vm.removeComment = function(post_id,id){
		console.log('hi')
		UserService.deleteComment(post_id,id).then(
			resp =>{
				console.log(resp)
				vm.readComments();
			})
	}
}
PostDetailsController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$sce'];
export{ PostDetailsController };