window.fbAsyncInit = function() {
  FB.init({
    appId      : '1667126750049792',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

function statusChangeCallback(response) {
  if(response.status === 'connected') {
      testAPI(response)
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log("respon login:",response)
    statusChangeCallback(response);
  });
}

function testAPI(responseStatCb){
  FB.api('/me', {fields: ['name', 'email']}, function (res){
    console.log(res)
    console.log(responseStatCb)
    axios.post('http://localhost:3000/fb', {
        facebook_id: res.id,
        email: res.email,
        username: res.name,
        fbToken: responseStatCb.authResponse.accessToken
    })
    .then(resLogin => {
        console.log(resLogin)
        // window.location.href = 'todo.html'
    })
    .catch(err => {
        console.log(err)
    })
  })
}