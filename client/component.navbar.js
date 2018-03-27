Vue.component('navbar',{
  template:`
  <nav class="navbar navbar-default" id="navstyle" >
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">DoDo</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="userid == null"><a><div class="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-use-continue-as="false" data-auto-logout-link="false" scope="public_profile,email" onlogin="checkLoginState()"></div></a></li>
            <li v-if="userid == null"><a>or</a></li>
            <li v-if="userid == null"><a href="" data-toggle="modal" data-target="#signInModal">Sign In</a></li>
            <li v-if="userid == null"><a href="" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
            <li v-if="userid != null">
              <a><button class="btn btn-primary" @click="logOutButtonClick" style="margin-top='10px;">Sign Out</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  props: ['userid'],
  methods: {
    logOutButtonClick: function () {
      this.$emit('logoutbuttonclick')
    }
  }
})