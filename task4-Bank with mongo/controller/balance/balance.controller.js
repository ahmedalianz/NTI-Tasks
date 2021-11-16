const {transactionToUserInDB,updateCurrentBalance}=require('./balance.helper')
const addBUser=(req,res)=>{
    let addedBalance={
        type:"Add",
        amount:'+'+req.body.balance,
        date: new Date().toDateString(),
        class:'greenborder'
    }
    transactionToUserInDB(req.params.id,addedBalance,(err,data)=>{
        if (err) res.redirect('/err')
    })
    updateCurrentBalance(req.params.id,parseInt(req.body.balance))
    res.redirect(`/`)
}
const withdrawBUser=(req,res)=>{
    let addedBalance={
        type:"Withdraw",
        amount:'-'+req.body.balance,
        date: new Date().toDateString(),
        class:'redborder'
    }
    transactionToUserInDB(req.params.id,addedBalance,(err,data)=>{
        if (err) res.redirect('/err')
    })
    updateCurrentBalance(req.params.id,parseInt(req.body.balance*-1))

    res.redirect(`/`)
}
module.exports={addBUser,withdrawBUser}