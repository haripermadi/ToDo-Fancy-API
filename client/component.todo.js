Vue.component('todo',{
  template: `
  <div class="col-md-12">
  <div class="checklist col-md-1">
      <button type="button" class="btn btn-default" @click="completedTodo(todo)"><span class="glyphicon glyphicon-unchecked"></span></button>
    </div>
    <div class="content col-md-8">
      <h4>{{todo.task}}</h4>
    </div>
    <div class="col-md-1">
      <button type="button" class="btn btn-warning" @click="getTodoForEdit(todo)"data-toggle="modal" data-target="#myModal">Edit</button>
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-danger" @click="deleteTodo(todo)">Delete</button>
    </div>
</div>   
  `,
  props:['todo'],
  methods: {
    completedTodo: function (todo) {
      this.$emit('completedtodo',todo)
    },
    getTodoForEdit: function(todo) {
      this.$emit('gettodoforedit', todo)
    },
    deleteTodo: function(todo) {
      this.$emit('deletetodo',todo)
    },
  }
})