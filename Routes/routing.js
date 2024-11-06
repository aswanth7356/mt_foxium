const express=require('express')
const userController=require('../Controllers/userController')


const route=express.Router()

route.post('/reg',userController.register)
route.post('/log',userController.login)


module.exports=route