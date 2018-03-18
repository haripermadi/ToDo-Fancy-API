const express = require('express');
const router = express.Router();

const {fbSignIn,fbSignOut} = require('../controllers/fbcontroller')


router.post('/signin',fbSignIn)
router.post('/',fbSignOut)

module.exports = router