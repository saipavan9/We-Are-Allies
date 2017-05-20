$(document).ready(function(){

$('.navbar-nav a').hover(function(){
        $(this).fadeTo("fast",0.7);
},function(){
  $(this).fadeTo("fast",1);
});
});
