require('dotenv').config()
const express = require('express')
const path=require('path')
const hbs = require('hbs')
const staticDir=path.join(__dirname, '../public')
const viewsDir=path.join(__dirname, '../frontEnd/views')
const layoutDir=path.join(__dirname, '../frontEnd/layout')

const app=express()
app.use(express.static(staticDir))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs')
app.set('views',viewsDir)
hbs.registerPartials(layoutDir)
const usersRoute=require('../routes/user.routes')
const balanceRoute=require('../routes/balance.routes')
app.use(usersRoute)
app.use(balanceRoute)
app.get('*', (req,res)=>{
    res.render('error404', {PageTitle: "error page"})
})

module.exports=app
