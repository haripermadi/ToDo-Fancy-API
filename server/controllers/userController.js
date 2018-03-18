const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
require('dotenv').load();

module.exports={
  signUp:(req,res)=>{
    let hash = bcrypt.hashSync(req.body.password,salt)
    let newUser ={
      name:req.body.name,
      email:req.body.email,
      password:hash
    }
    User.findOne({
      email:req.body.email
    }).then(data=>{
      if(data){
        res.status(400).json({
          message:"email already registered!!"
        })
      }else{
        let user = new User(newUser)
        user.save().then(user=>{
          console.log("===>",user)
          if(user){
            res.status(201).json({
              message:"user is created",
              user
            })
          }else{
            res.status(406).json({
              message:"something wrong"
            })
          }
        }).catch(err=>{
            console.log(err)
            res.status(404).send(err.message)
          })
      }
    })
    
  },
  signIn:(req,res)=>{
    console.log("ini sign in ",req.body)
    User.findOne({
      email:req.body.email
    }).then(dataUser=>{
      if(dataUser){
        console.log("ini data user===",dataUser)
        let checkPass = bcrypt.compareSync(req.body.password,dataUser.password)
        if(checkPass){
          let token = jwt.sign({id:dataUser._id,email:dataUser.email},'secret')
          res.status(200).json({
            message:"login success",
            token
          })
        }else{
          res.status(400).json({
            message:"email/password is wrong!!"
          })
        }
      }
    })

  }
}