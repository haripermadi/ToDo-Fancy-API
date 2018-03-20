const Todo = require('../models/todo')
const User = require('../models/user')

module.exports={
  getAllTodo:(req,res)=>{
    console.log("id user===>",req.params)
    User.findOne({
      _id:req.params.id
    })
    .exec()
    .then(user=>{
      console.log("ini usernya",user)
      if(user){
        Todo.find({
          userId:user.id
        })
        .populate('userId')
        .exec()
        .then(listTodo=>{
          res.status(200).json({
            message:"success",
            listTodo
          })
        }).catch(err=>{
          res.status(400).json(err)
        })
      }else{
        res.status(404).json({
          message:"user not found, login first!"
        })
      }
    }).catch(err=>{
      res.status(404).json({
        message:"user not found, login first!"
      })
    })
    
  },
  addTodo:(req,res)=>{
    const {task,userId} = req.body
    let input = {
      task : req.body.task,
      userId : req.headers.id
    }
    const todo = new Todo(input)
    console.log("======",todo);
    todo.save().then(data=>{
      res.status(200).json({
        message:"todo created",
        todo:data
      })
    }).catch(error=>{
      res.status(400).json({
        message:"error",
        error
      })
    })
  },
  getByIdTodo:(req,res)=>{
    let id = {_id:req.params.id}
    Todo.findOne(id)
    .exec()
    .then(data=>{
      res.status(200).json({
        message:"success find one",
        data
      })
    }).catch(error=>{
      res.status(400).json({
        message:"error",
        error
      })
    })
  },
  updateTodo:(req,res)=>{
    console.log("ini update",req.body)
    let id = {_id:req.params.id}
    // const {task} = req.body
    let input = {
      task : req.body.task
    }
    console.log(id)
    Todo.findOneAndUpdate(id,input,{new:true},(err,beforeUpdate)=>{
      if(!err){
        res.status(200).json({
          message:"update success",
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  },
  removeTodo:(req,res)=>{
    let id = {_id:req.params.id}
    Todo.findByIdAndRemove(id,(err,deletedTodo)=>{
      if(!err){
        res.status(200).json({
          message:"todo removed!",
          data:deletedTodo
        })
      }else{
        res.status(400).json({
          message:"error"
        })
      }
    })
  },
  completeTodo:(req,res)=>{
    console.log(req.body)
    let id = {_id:req.params.id}
    console.log(req.params.id)
    Todo.findByIdAndUpdate(id,{$set:{status:true,updateAt: Date.now()}},{new:true},(err,todo)=>{
      if(!err){
        res.status(200).json({
          message:"update success",
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  },
  uncompleteTodo:(req,res)=>{
    console.log(req.body)
    let id = {_id:req.params.id}
    console.log(req.params.id)
    Todo.findByIdAndUpdate(id,{$set:{status:false,updateAt: Date.now()}},{new:true},(err,todo)=>{
      if(!err){
        res.status(200).json({
          message:"update success",
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  }
}