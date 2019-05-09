$(function(){
// adjust header height 
$(".header").height($(window).height());

    $(window).resize(function(){
       $(".header").height($(window).height());
    $(".bxslider").each(function(){
  
 $(this).css('paddingTop' ,($(window).height()-$(".bxslider li").height())/2);

    
    }); 
  });
    
    
//Add active class to links 
    $(".links li a").click(function(){
     $(this).parent().addClass("active").siblings().removeClass("active");
    
    });
    
//customize  slider item center 
  
$(".bxslider").each(function(){
$(this).css('paddingTop',($(window).height()-$(".bxslider li").height())/2);
});    
    
    
//customize the slider
 $('.bxslider').bxSlider({
 pager:false
 });   
    
    
//Smooth Scroll to Services    
    $(".ser").click(function(){
    $('html , body').animate({
     scrollTop:$("#Ser").offset().top
    
    },1000);
    
    
    });
//===========================================
 
//    $(".links li a").click(function(){
//    
//     $("html , body ").animate({
//     
//      scrollTop:$("#" + $(this).data('value')).offset()
//        
//     
//     },1000);
//     console.log("a7aaaaaaaaaaaaaaaa");   
//    
//    });
//===================================================    
  $(".testemon").click(function(){
    $('html , body').animate({
     scrollTop:$("#testemon").offset().top
    
    },1000);
    
    
    });
    
//=================================================
    $(".port").click(function(){
    $('html , body').animate({
     scrollTop:$("#port").offset().top
    
    },1000);
    
    
    });
   
 /*========================Slider Jquery=============================*/   
   (function autoslid(){

   $(".slider .active").each(function(){
   
    if(!$(this).is(":last-child") ){
        $(this).delay(4000).fadeOut(1000, function(){
        
         $(this).removeClass("active").next().addClass("active").fadeIn();
            autoslid();
        });
     
    }else{
        $(this).delay(4000).fadeOut(1000, function(){
          
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
             autoslid();
        
        });
    
    }
   });
   }());
   
//Trigger the Mixitup  Plugin  
    
      mixitup("#container");
    
//Styling
    $(".projects ul li").click(function(){
    
    $(this).addClass("selected").siblings().removeClass("selected");
    
    
    });
    
    
// Adding NiceScroll Plugin
    $("body").niceScroll({
  cursorcolor:"#24B79B",
  cursorwidth:"6px",
  cursorborder:"none"       
});
    
    
 
});