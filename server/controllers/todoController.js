const Todo = require('../models/todo')

module.exports={
  getTodo:(req,res)=>{
    Todo.find().exec().then(listTodo=>{
        res.status(200).json({
          message:"success",
          listTodo
        })
        .catch(err=>{
          res.status(400).json(err)
        })
    })
  },
  addTodo:(req,res)=>{
    const todo = new Todo(req.body)
    todo.save().then(data=>{
      res.status(200).json({
        message:"todo created",
        todo:data
      })
    }).then(error=>{
      res.status(400).json({
        message:"error",
        error
      })
    })
  },
  updateTodo:(req,res)=>{
    let id = {_id:req.params.id}
    Todo.findByIdAndUpdate(id,req.body,(err,beforeUpdate)=>{
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
    Todo.remove(id,(err)=>{
      if(!err){
        res.status(200).json({
          message:"todo removed!",
        })
      }else{
        res.status(400).json({
          message:"error"
        })
      }
    })
  }
}