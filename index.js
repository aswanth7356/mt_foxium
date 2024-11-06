require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routing')
require('./DBconnection/connection')


const server=express()


server.use(cors())
server.use(express.json())
server.use(router)


const PORT=3000

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

server.get('/',(req,res)=>{
    res.status("Request Recieved!!")
})