Vue.component('complete-todo',{
  template: `
  <div class="col-md-12">
    <div class="checklist col-md-1">
        <button type="button" class="btn btn-default" @click="uncompletedTodo(todo)"><span class="glyphicon glyphicon-check"></span></button>
      </div>
      <div class="content col-md-8">
        <h4>{{todo.task}}</h4>
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-danger" @click="deleteTodo(todo)">Delete</button>
      </div>
  </div>     
  `,
  props:['todo'],
  methods: {
    uncompletedTodo: function (todo) {
      this.$emit('uncompletedtodo',todo)
    },
    deleteTodo: function(todo) {
      this.$emit('deletetodo',todo)
    },
  }
})