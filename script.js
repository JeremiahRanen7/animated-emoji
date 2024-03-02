$(document).ready(function(){
    $(document).mousemove(function(event){
        var x_coor = event.pageX;
        var y_coor = event.pageY;
        // console.log(x)
        // console.log(y)
        var x = (x_coor * 50) / window.innerWidth + "px"
        var y = (y_coor * 50) / window.innerHeight + "px" 
        console.log(x)
        console.log(y)

        $(".eyeball").css({
            top:y,
            left:x
        })
    })
})