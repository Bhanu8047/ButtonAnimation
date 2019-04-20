let circle = $('.circle');
let animate = $('.animate');
circle.on('click', ()=>{
    if(circle.hasClass("turnedOff")){
        circle.removeClass("turnedOff");
        circle.addClass("turnedOn");
        animate.addClass("animateOn");
        animate.removeClass("animateOff");
        // circle.html("on")
    }
    else{
        circle.removeClass("turnedOn");
        circle.addClass("turnedOff");
        animate.removeClass("animateOn");
        animate.addClass("animateOff");
        // circle.html("off")
    }
});