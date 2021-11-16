const {MongoClient}=require('mongodb')
const dbName='bank'
const dbHost='mongodb://localhost:27017'
const dbConnection=(cb)=>{
    MongoClient.connect(dbHost,{},(err,client) => {
        if(err) return cb(err,null)
        const dbClient=client.db(dbName)
        cb(null,dbClient)
    })
}
module.exports=dbConnection