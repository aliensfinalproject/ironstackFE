function PostDetailsController(UserService,$state,$rootScope,$stateParams,$sce){
	let vm = this;
	vm.postDetails ={}
	
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
				
			})

	}
	vm.getPostDetails();

	vm.createComment = function(comment){	
		UserService.addComment(comment, $stateParams.id).then(

			resp =>{ 
				console.log(resp);
			})
	}
}
PostDetailsController.$inject = ['UserService', '$state', '$rootScope','$stateParams','$sce'];
export{ PostDetailsController };