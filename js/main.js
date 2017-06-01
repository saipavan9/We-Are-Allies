$(document).ready(function(){

$('.navbar-nav a').hover(function(){
        $(this).fadeTo("fast",0.7);
},function(){
  $(this).fadeTo("fast",1);
});

if(window.innerWidth > 762)
{
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
console.log(window.innerWidth);
}
$('.counter').counterUp({
  delay:10,
  time:1500
});
});


function myMap() {
    var mapCanvas = document.getElementByClass("map");
    var mapOptions = {
        center: new google.maps.LatLng(42.0825429,-71.643423),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
} 
