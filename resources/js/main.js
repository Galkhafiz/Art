$(document).ready(function(){
    $('.header').height($(window).height());
    
   })
   

   $(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })


//    <button class="btn btn-outline-secondary btn-lg">See more</button>  


