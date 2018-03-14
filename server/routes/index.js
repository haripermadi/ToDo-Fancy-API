var express = require('express');
var router = express.Router();
const {signUp,signIn} = require('../controllers/userController')
/* GET home page. */
router.get('/',function(req,res){
  res.status(200).json({
    message:"welcome"
  })
})

router.post('/signup',signUp)
router.post('/signin',signIn)

module.exports = router;
