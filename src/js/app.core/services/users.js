function UserService ($http, $cookies, SERVER,$stateParams) {

  this.login = login;
  this.create = create;
  this.getClasses = getClasses;
  this.getClass = getClass;
  this.addingClass = addingClass;
  this.addAdmin = addAdmin;
  this.getUsers = getUsers;
  this.deleteUser = deleteUser;
  this.getPosts = getPosts;
  this.getPost = getPost;
  this.addclasstoUser = addclasstoUser;
  this.addPost = addPost;
  this.deletePost = deletePost;
  this.deleteComment = deleteComment;
  this.userPost= userPost;
  this.addComment = addComment;
  this.getComments = getComments;
  this.userProfile = userProfile;
  this.getuserProfile = getuserProfile;
  this.isLoggedIn = isLoggedIn;
  this.isAdmin = isAdmin;
  this.setUser = setUser;
  this.logout = logout;
  this.getHeaders = getHeaders;
  this.addAssignment = addAssignment;
  this.getAssignments = getAssignments;
  this.updateAssignment = updateAssignment;
  this.deleteAssignment = deleteAssignment;
  this.getPostAssignments = getPostAssignments;
  this.addNote = addNote;
  this.getNotes = getNotes;


  function create (user) {
    return $http.post(`${SERVER}/register`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  }

  function getClasses(){
    return $http.get(`${SERVER}/class`,{headers:getHeaders()});
  }
  function getClass(){
    return $http.get(`${SERVER}/class/`,{headers:getHeaders()});

  }
  function addingClass(clazz){
    return $http.post(`${SERVER}/class/create`, clazz, {headers:getHeaders()});
  }
  function addAdmin(user,user_id){
    return $http.put(`${SERVER}/usermgmt/${user_id}`,user,{headers:getHeaders()});
  }
  function getUsers(){
    return $http.get(`${SERVER}/usermgmt`,{headers:getHeaders()});
  }
  function deleteUser(user_id){
    return $http.delete(`${SERVER}/users/delete/${user_id}`,{headers:getHeaders()});
  }
  function addclasstoUser(clazz){
    return $http.post(`${SERVER}/usermgmt/addclass/`,clazz,{headers:getHeaders()});

  }
  function addPost(post, class_id){
    return $http.post(`${SERVER}/class/${class_id}/post`,post,{headers:getHeaders()});
  }
  function getPosts(class_id){
    return $http.get(`${SERVER}/class/${class_id}/posts`,{headers:getHeaders()});
  }
  function getPost(class_id,post_id){
    return $http.get(`${SERVER}/class/${class_id}/post/${post_id}`,{headers:getHeaders()});
  }
  function getPostAssignments(class_id,assignment_id){
    return $http.get(`${SERVER}/class/${class_id}/assignment/${assignment_id}`,{headers:getHeaders()});
  }
  function deletePost(class_id,post_id){
    return $http.delete(`${SERVER}/class/${class_id}/post/${post_id}`,{headers:getHeaders()});
  }
  function userPost(){
    return $http.get(`${SERVER}/users/me/posts`,{headers:getHeaders()});
  }
  function addComment(comment,post_id){
    return $http.post(`${SERVER}/post/${post_id}/comment`,comment,{headers:getHeaders()});
  }
  function getComments(post_id){
  return $http.get(`${SERVER}/post/${post_id}/comments`,{headers:getHeaders()});
  }
  function deleteComment(post_id,id){
  return $http.delete(`${SERVER}/post/${post_id}/comments/${id}`,{headers:getHeaders()});
  }
  function userProfile(user){
  return $http.post(`${SERVER}/slackuser/`,user,{headers:getHeaders()});
  }
  function getuserProfile(){
  return $http.get(`${SERVER}/userProfile/`,{headers:getHeaders()});
  }


  function addAssignment(assignment){
   return $http.post(`${SERVER}/assignment/`, assignment,  {headers:getHeaders()});
  }
function getAssignments(class_id){
 return $http.get(`${SERVER}/${class_id}/assignments/`, {headers:getHeaders()});
}
function deleteAssignment (id) {
 return $http.delete(`${SERVER}/assignment/${id}`, {headers:getHeaders()});
}
function updateAssignment(id){
 return $http.get(`${SERVER}/${assignment}/${id}/`, {headers:getHeaders()});
}
function addNote (note) {
  return $http.post(`${SERVER}/userNote`, note, {headers:getHeaders()});
}
function getNotes () {
  return $http.get(`${SERVER}/userNotes`, {headers:getHeaders()});
}

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function isAdmin () {
    return $cookies.get('admin') === '1';
  }

  function logout () {
    $cookies.remove('username');
    $cookies.remove('access_token');
    $cookies.remove('classId');
    $cookies.remove('admin');
  }

  function setUser (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
    $cookies.put('admin', data.admin ? '1' : '0');
    $cookies.put('classId', data.class_id);
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  }

};

UserService.$inject = ['$http', '$cookies', 'SERVER','$stateParams'];
export { UserService };
