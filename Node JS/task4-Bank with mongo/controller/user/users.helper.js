const dbConnection = require('../commonHelper')
const showAllUsersFromDB=(cb)=>{
        dbConnection((err,client) => {
            if(err) return console.log(err)
            client.collection('user').find().toArray((error,res) => {
                if(error) return cb(error,null)
                cb(null,res)
            })
        })
}
const showUserFromDB=(id,cb)=>{
    dbConnection((err,client) => {
        if(err) return console.log(err)
        client.collection('user').findOne({id},
            (error,res) => {
            if(error) return cb(error,null)
            cb(null,res)
        })
    })
}

const addUserToDB=(data)=>{
    dbConnection((err,client)=>{
        if(err) return console.error(err)
        client.collection('user').insertOne(
            {...data},
        (error,res)=>{
            if(error) res.send('database error')
        })
    })
}
const editUserToDB=(id,body,cb)=>{
    dbConnection((err,client)=>{
        if(err) return console.error(err)
        client.collection('user').updateOne({id},{
            $set:body
        },
        (error,res)=>{
            if(error) cb('database error')
        })
    })
}
module.exports={showAllUsersFromDB,showUserFromDB,addUserToDB,editUserToDB}