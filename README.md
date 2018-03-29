# ToDo-Fancy-API
todo API 

# what is Todo?
adalah sebuah web app sederhana untuk membuat todo list. User bisa sign up dan login, lalu menambahkan list todo yang diinginkan. Setelah login user akan disambut oleh sebuah kalimat joke untuk meenghibur user.

#Build set up

##Server
```
npm install
npm start /nodemon start

```
##Client

```
npm install
npm run dev

```

#Routing

**Route** | **HTTP** | **Descrition**
----------|----------|---------------
/user/signup | POST | sign up user
/user/signin | POST | login user
/user/fbsignin | POST | login user dengan facebook
/todo/:id | GET | show all todos user
/todo | POST | add new todo
/todo/:id | PUT | edit todo
/todo/completed/:id | PUT | update todo to complete
/todo/uncompleted/:id | PUT | update todo to uncomplete one
/todo/:id | DELETE | remove a todo


#Demo

For demo apps you can access [todo.haripermadi.com](http://todo.haripermadi.com)