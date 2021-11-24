const dbConnection=require('../commonHelper')
const transactionToUserInDB=(id,body,cb)=>{
    dbConnection((err,client)=>{
        if(err) return console.error(err)
        client.collection('user').updateOne({id},{
            $push:{transactions:body}
        },
        (error,res)=>{
            if(error) cb('database error')
        })
    })
}
const updateCurrentBalance=(id,body,cb)=>{
    dbConnection((err,client)=>{
        if(err) return console.error(err)
        client.collection('user').updateOne({id},{
            $inc:{currentBalance:body}
        })
    })
}
module.exports={transactionToUserInDB,updateCurrentBalance}