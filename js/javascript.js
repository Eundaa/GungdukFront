$( document ).ready(function() {
    $(window).resize();
 }); 

 //change logo size in 00_0_splash.html
$(window).resize(function(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();

     $('.logo').each(function() {
        $(this).css({
            'width': winWidth*0.209 +'px',
            'height' : winHeight*0.159+'px'
        });
    });
    $('.logo').css({position:'absolute'}).css({
        left: (winWidth - $('.logo').outerWidth())/2,
        top: (winHeight - $('.logo').outerHeight())/2
    });
})
