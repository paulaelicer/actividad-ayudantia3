
$(document).ready(function(){
    $("#boton1").click(function(){
        $("img").toggle()
    });
    var titulo=$(".par").text()
    $("#boton2").click(function(){
        if ($(".par").text()== titulo){
            $(".par").text("Doglovers")
        }
        else{
            $(".par").text(titulo)
        }
    });

});
