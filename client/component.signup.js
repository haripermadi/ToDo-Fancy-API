Vue.component('signup',{
  template: `
  <div id="signUpModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-sm modal-lg">
  
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Sign Up</h4>
        </div>
        <div class="modal-body">
          <form>
              <div class="form-group">
                <label for="addTodo">Name</label>
                <input type="text" placeholder="your name..." class="form-control" v-model="objuser.name">
                <label for="addTodo">Email</label>
                <input type="email" placeholder="your email..." class="form-control" v-model="objuser.email">
                <label for="addTodo">Password</label>
                <input type="password" placeholder="your password..." class="form-control" v-model="objuser.password">
              </div>
              <button type="button" class="btn btn-default" @click="createUser">Sign Up</button>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
  
    </div>
  </div>
  `,
  props:['objuser'],
  methods: {
    createUser: function () {
      this.$emit('createuser')
    }
  }
})