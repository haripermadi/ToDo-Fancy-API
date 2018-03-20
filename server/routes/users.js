var express = require('express');
var router = express.Router();
const {signUp,signIn,signInFb,testJwt} = require('../controllers/userController')
const {authUser} = require('../middlewares/auth')
router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/fbsignin',signInFb)
router.get('/testjwt', authUser, testJwt)

module.exports = router;
