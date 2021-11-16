const{showAllUsersFromDB,showUserFromDB}=require('./users.helper')
const showAll=(req, res) => {
    showAllUsersFromDB((err,data) => {
        if (err) return res.send('err')
        res.render('showall',{
            pageTitle: 'Bank System-All users',
            allUsers:data,
            noData: !data.length?true:false
            })
    })
}
const addPage=(req,res)=>{
    res.render('adduser',
    {
    pageTitle: 'Add User'
    })
}
const showUserPage=(req, res) =>{
    showUserFromDB(req.params.id,(err,data) => {
        if (err) res.redirect('/err')
        res.render('showsingle',{
            pageTitle: 'Show User',
            user:data,
            noData: data.transactions.length==0?true:false
        } )    
    })
}
const editPage=(req,res)=>{
    showUserFromDB(req.params.id,(err,data) => {
        if (err) res.redirect('/err')
        res.render('edituser',{
            pageTitle: 'edit User',
            user:data,
            noData: data.transactions.length==0?true:false
        } )    
    })
}
module.exports={showUserPage,editPage,showAll,addPage}