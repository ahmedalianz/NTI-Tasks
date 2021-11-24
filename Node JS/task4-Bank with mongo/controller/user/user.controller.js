const {v4:uuid} = require('uuid')
const {addUserToDB,editUserToDB} = require('./users.helper')

const addUser=(req,res)=>{
    const{initialBalance,...others}=req.body
    let user={id:uuid(),transactions:[],...others,
        initialBalance:parseInt(initialBalance),
        currentBalance:parseInt(initialBalance)}
    addUserToDB(user)
    res.redirect('/')
}

const editUser=(req,res)=>{
    editUserToDB(req.params.id,req.body,(err,data)=>{
        if (err) res.redirect('/err')
    })
    res.redirect(`/single/${req.params.id}`)
}
module.exports={addUser,editUser}