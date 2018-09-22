$( document ).ready(function() {
    $(window).resize();
 }); 

$(window).resize(function(){
    //change logo size in logo.html
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