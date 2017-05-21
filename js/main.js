$(document).ready(function(){

$('.navbar-nav a').hover(function(){
        $(this).fadeTo("fast",0.7);
},function(){
  $(this).fadeTo("fast",1);
});

var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
       $('#mainNav').css({"background":"black"});
       $('#navlogo').css("visibility","visible");
    } else {
       $('#mainNav').css({"background":"transparent"});
        $('#navlogo').css("visibility","hidden");
    }
});
$('.counter').counterUp({
  delay:10,
  time:1500
});
});
