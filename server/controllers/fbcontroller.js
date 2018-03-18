const express = require('express')
const Users = require('../models/user')
const jwt = require('jsonwebtoken')


module.exports = {
  fbSignIn : (req,res)=>{
    const fbToken = req.body.fbToken
    console.log(fbToken)
    Users.findOne({
      email:req.body.email
    }).then(dataUser=>{
      if(dataUser){
        const token = jwt.sign({email:dataUser.email,fbToken:fbToken},'secret')
        res.status(200).json({
          message:"login fb success",
          dataUser,
          token
        })
      }else{
        let newUser ={
          name:req.body.name,
          email:req.body.email,
        }
        const user = new Users(newUser)
        user.save((err,data)=>{
          const token = jwt.sign({email:dataUser.email,fbToken:fbToken},'secret')
          res.status(200).json({
            message:"login fb success",
            dataUser,
            token
          })
        })

      }

    })
  },
  fbSignOut : (req,res)=>{

  }
}