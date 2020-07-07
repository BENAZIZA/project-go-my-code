const express = require ('express')
const router =express.Router()
const userControl = require ('../controlers/auth')
router.post('/register',userControl.signup)
module.exports = router;
