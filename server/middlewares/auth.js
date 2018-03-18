const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').load();

module.exports={
  authUser : function(req,res,next){
    console.log("masuk middleware",req.headers)
    
    try{
      let token = req.headers.token
      let decoded = jwt.verify(token,'secret')
      next()
    }
    catch(err){
      res.status(400).json({
        err
      })
    }
  }
}
