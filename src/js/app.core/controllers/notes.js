function NotesController (UserService){
  let vm = this
  vm.note = {};
  vm.notes = [];


  vm.createNote = function () {
    UserService.addNote().then(resp => {
      vm.note = resp.data
    })
  }

  vm.readNotes = function () {
    UserService.getNotes().then(resp => {
      vm.notes = resp.data
    })
  }




}

NotesController.$inject = ['UserService'];

export { NotesController };
