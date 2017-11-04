var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);

io.on("connection", function(socket){
    console.log("co nguoi ket noi " + socket.id);
    socket.on("CLI-send-notification",function (data){
    control = String(data);
    console.log("control: " + control);

    });

  socket.on("CLI-send-controlling-data", function(data){
    console.log(data);
  //socket.broadcast.emit("server-send-sensor-data", data);
  });

});

app.get("/", function (req, res){

  res.render("trangchu");
});
