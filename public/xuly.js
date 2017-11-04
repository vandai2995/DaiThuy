var socket = io("http://localhost:3000");

socket.on("server-send-sensor-data", function(data_temp,data_humidity){
  $("#displayTemp").html("");
  $("#displayTemp").html("<img src = 'temperature.jpg' id='tempImg' />" + data_temp + "&deg" + "C");
  $("#displayHum").html("");
  $("#displayHum").html("<img src = 'humidity.jpg' id='humImg' />" + data_humidity + "&#37");
  });

$(document).ready(function(){
  $("#option").show();
  $("#dieuKhien").hide();
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  slider.oninput = function() {
  output.innerHTML = this.value;
  }
  $("#btnAutomation").click(function(){
    $("#dieuKhien").hide(1000);
    socket.emit("CLI-send-notification","1")
  });
  $("#btnControlling").click(function(){
    $("#dieuKhien").show(2000);
    socket.emit("CLI-send-notification","0")

  });
  $("#btnLightOn").click(function(){
    socket.emit("CLI-send-controlling-data", "batden");
  });
  $("#btnLightOff").click(function(){
    socket.emit("CLI-send-controlling-data", "tatden");
  });
  $("#slideContainer").click(function(){
    socket.emit("CLI-send-controlling-data",output.innerHTML);
  });

});
