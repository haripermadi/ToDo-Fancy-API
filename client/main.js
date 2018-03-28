window.onload = function(){
  let app =new Vue ({
    el:'#app',
    data:{
      jwtToken : localStorage.getItem('token'),
      userId : localStorage.getItem('userId'),
      fbId : localStorage.getItem('fbId'),
      objUser :{
        name:'',
        email:'',
        password:'',
      },
      userLogin:{
        email:'',
        password:''
      },
      task:'',
      todos:[],
      completedTodos:[],
      updateTask:'',
      todo:'',
      editTodo:{},
      jokes:''
      
    },
    created: function(){
      this.showTodo()
      this.joke()
    },
    methods:{
      showTodo: function(){
        let self = this
        console.log('ini id user onload',this.userId)
        axios({
          method:'get',
          url:`http://api-todo.haripermadi.com/todo/${this.userId}`,
          headers:{
            token:this.jwtToken
          }
        }).then(function(response){
            console.log("respon gettodo",(response.data.listTodo)); 
            self.todos=response.data.listTodo.filter(todo => todo.status == false)
            self.completedTodos=response.data.listTodo.filter(todo => todo.status == true)
        }).catch(function(err){
          console.log(err)
        })
      },
      addTodo: function(){
        let token = this.jwtToken
        let self= this
        if(token){
          axios({
            method:'post',
            url:'http://api-todo.haripermadi.com/todo',
            headers:{
              id:this.userId,
              token:this.jwtToken
            } ,
            data:{
              task:this.task
            }
          }).then(function({response}){
              console.log("respon gettodo",JSON.stringify(response)); 
              self.todos.push(response.task)
          }).catch(function(err){
            console.log(err)
          })
        }else{
          alert('Login first!')
        }
        
      },
      deleteTodo : function(todo){
        let self = this
        console.log(todo)
        axios({
          method:'delete',
          url:`http://api-todo.haripermadi.com/todo/${todo._id}`,
          headers:{
            token:this.jwtToken
          }
        }).then(function(response){
            console.log("respon gettodo",JSON.stringify(response)); 
            self.showTodo()
        }).catch(function(err){
          console.log(err)
        })
      },
      getTodoForEdit : function(todo){
        console.log("ini untuk edit",todo)
        this.editTodo = todo
      },
      EditTodo:function(updateTask){
        // console.log("for server update",updateTask)
        let self = this
        axios({
          method:'put',
          url:`http://api-todo.haripermadi.com/todo/${updateTask._id}`,
          headers:{
            token:this.jwtToken
          },
          data:updateTask
        }).then(function(response){
            console.log("respon gettodo",JSON.stringify(response)); 
            // self.showTodo()
        }).catch(function(err){
          console.log(err)
        })
      },
      completedTodo : function(todo){
        console.log('completed',todo)
        let self= this
        axios({
          method:'put',
          url:`http://api-todo.haripermadi.com/todo/completed/${todo._id}`,
          headers:{
            token:this.jwtToken
          },
          data:todo
        }).then(function(response){
            console.log("respon gettodo",JSON.stringify(response)); 
            self.showTodo()
        }).catch(function(err){
          console.log(err)
        })
      },
      uncompletedTodo : function(todo){
        console.log('completed',todo)
        let self= this
        axios({
          method:'put',
          url:`http://api-todo.haripermadi.com/todo/uncompleted/${todo._id}`,
          headers:{
            token:this.jwtToken
          },
          data:todo
        }).then(function(response){
            console.log("respon gettodo",JSON.stringify(response)); 
            self.showTodo()
        }).catch(function(err){
          console.log(err)
        })
      },
      createUser : function(){
        console.log("ini form input===",this.objUser)
        // alert(this.objUser)
        axios({
          method : 'post',
          url : 'http://api-todo.haripermadi.com/users/signup',
          data:this.objUser,
        })
        .then(function (resSignUp) {
          console.log("resLogin",JSON.stringify(resSignUp));
          location.reload()
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      loginUser : function(){
        console.log("login user===",this.userLogin)
        axios({
          method : 'post',
          url : 'http://api-todo.haripermadi.com/users/signin',
          data:this.userLogin
        })
        .then(function (resSignIn) {
          console.log("resLogin",resSignIn.data.data.id);
          localStorage.setItem('token',resSignIn.data.data.token)
          localStorage.setItem('userId',resSignIn.data.data.id)
          window.location.href="todo.html"

        })
        .catch(function (error) {
          alert('wrong email/password')
          console.log(error);
        });
      },
      logOutButtonClick : function (){
        // alert('log out')
        console.log('user log out')
        localStorage.clear()
        console.log('data cleared')
        window.location.href = "index.html";
      },
      joke: function(){
        let self= this
        axios({
          method : 'get',
          url : 'https://icanhazdadjoke.com/',
          headers:{
            Accept:"application/json"
          }
        })
        .then(function (response) {
          // alert(response.data.joke)
          console.log(response)
          self.jokes = response.data.joke
        })
        .catch(function (error) {
          console.log(error);
        });
      }

  
    }
  })
}
