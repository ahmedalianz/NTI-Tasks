const router=require('express').Router()
const {addBUser,withdrawBUser}=require('../controller/user.controller')
const {addBPage,withdrawBPage}=require('../controller/balancePages')
router.get('/addB/:id', addBPage)                  
router.post('/addB/:id', addBUser)
router.get('/withdrawB/:id', withdrawBPage)                  
router.post('/withdrawB/:id', withdrawBUser)
module.exports = router