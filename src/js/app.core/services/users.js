function UserService ($http, $cookies, SERVER,$stateParams) {

  this.login = login;
  this.create = create;
  this.getClasses = getClasses;
  this.getClass = getClass;
  this.addingClass = addingClass;
  this.getUsers = getUsers;
  this.deleteUser = deleteUser;
  this.getPost = getPost;
  this.addPost = addPost;
  this.userPost= userPost;
  this.isLoggedIn = isLoggedIn;
  this.isAdmin = isAdmin;
  this.setUser = setUser;
  this.logout = logout;
  this.getHeaders = getHeaders;

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
  function getUsers(){
    return $http.get(`${SERVER}/usermgmt`,{headers:getHeaders()});
  }
  function deleteUser(){
    return $http.delete(`${SERVER}/users/delete/`+$stateParams._id,{headers:getHeaders()});
  }
  function addPost(post, class_id){
    return $http.post(`${SERVER}/class/${class_id}/post`,post,{headers:getHeaders()});
  }
  function getPost(class_id){
    return $http.get(`${SERVER}/class/${class_id}/posts`,{headers:getHeaders()});
  }
  function userPost(){
    return $http.get(`${SERVER}/users/me/posts`,{headers:getHeaders()});
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
  }

  function setUser (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
    $cookies.put('admin', data.admin);
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
