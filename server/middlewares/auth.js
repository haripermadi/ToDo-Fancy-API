const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').load();

module.exports={
  authUser : function(req,res,next){
    let token = req.headers.token
    if(token){
      let decoded = jwt.verify(token,'secret')
      console.log("ini decoded:",decoded)
      if(decoded.role === 'user'){
        next()
      }else{
        res.status(403).json({
          message:"You don't have access!!!"
        })
      }
    }else{
      res.status(403).json({
        message:"You don't have access!! login first!"
      })
    }
  }
}
