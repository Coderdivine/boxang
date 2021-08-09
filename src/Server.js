const app=require('express')();
const http=require('http').Server(app);
const io=require('socket.io')(http);

app.listen(4000,function(){
   console.log('listening on * :3000');
});


io.on("connection",function(socket){
    socket.on("message",function(data){
        io.emit("message-sent",data);
    })
})
io.on("connect",function(socket){
    socket.on("msg",function(data){
        io.emit("message-to-send",data);
    })
})