const {showUserFromDB}=require('../user/users.helper')
const addBPage=(req,res)=>{
    showUserFromDB(req.params.id,(err,data) => {
        if (err) res.redirect('/err')
        res.render('addBalance',{
            pageTitle: 'Add Balance to User',
            user:data,
        } )    
    })
}
const withdrawBPage=(req,res)=>{
    showUserFromDB(req.params.id,(err,data) => {
        if (err) res.redirect('/err')
        res.render('withdrawBalance',{
            pageTitle: 'withdraw Balance From User',
            user:data,
        } )    
    })
}
module.exports={addBPage,withdrawBPage}