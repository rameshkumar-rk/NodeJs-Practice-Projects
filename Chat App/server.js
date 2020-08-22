var express=require('express')
var bodyparser=require('body-parser')
const { Socket } = require('dgram')
var app=express()
var http=require('http').Server(app)
var io=require('socket.io')(http)
var mongoose=require('mongoose')

app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

var message=[
    {name:'Ramesh',message:'Hello'},
    {name:'Rohith',message:'world'}
]

app.get('/message',(req,res)=>{
    res.send(message)
})


app.post('/message',(req,res)=>{
    message.push(req.body)
    io.emit('message',req.body)
    res.sendStatus(200)
})

io.on('connection',(socket)=>{
    console.log("user connected")
})

var server=http.listen(3000,()=>{
    console.log('server is running on',server.address().port)
} )