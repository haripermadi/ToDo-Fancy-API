Vue.component('login',{
  template: `
  <div id="signInModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-sm modal-lg">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Sign In</h4>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
              <label for="addTodo">Email</label>
              <input type="email" placeholder="your email..." class="form-control" v-model="userlogin.email">
              <label for="addTodo">Password</label>
              <input type="password" placeholder="your password..." class="form-control" v-model="userlogin.password">
            </div>
            <button type="button" class="btn btn-default" @click="loginUser">Log In</button>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>   
  `,
  props:['userlogin'],
  methods: {
    loginUser: function () {
      this.$emit('loginuser')
    }
  }
})