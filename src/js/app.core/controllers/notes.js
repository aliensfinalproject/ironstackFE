import moment from 'moment';
function NotesController (UserService){

  let vm = this
  vm.note = {};
  vm.notes = [];

  vm.createNote = function () {
    UserService.addNote(vm.note).then(resp => {
      // console.log(resp)
      vm.notes = resp.data
      vm.note = "";
      vm.readNotes();

    })
  }

  vm.readNotes = function () {
    UserService.getNotes().then(resp => {
      console.log(resp)
      vm.notes = resp.data
      for(let i=0 ; i<vm.notes.length;i++){
       vm.notes[i].created_at = moment(vm.notes[i].created_at).format('MMMM Do YYYY')

      }
    })
  }
    vm.readNotes();

}

NotesController.$inject = ['UserService'];

export { NotesController };
