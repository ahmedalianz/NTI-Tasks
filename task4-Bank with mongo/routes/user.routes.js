const router=require('express').Router()
const {addUser,editUser}=require('../controller/user/user.controller')
const {showAll,addPage,showUserPage,editPage}=require('../controller/user/userPages')
router.get('/', showAll)
router.get('/single/:id', showUserPage)
router.get('/add', addPage)
router.get('/edit/:id', editPage)                  
router.post('/adduser', addUser)
router.post('/edit/:id', editUser)
module.exports = router