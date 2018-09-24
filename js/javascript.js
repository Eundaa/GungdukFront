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

$(window).resize(function(){
    $('ul.tabs li').css({
    marginTop : $('.navigation').height()*0.364,
    marginBottom : $('.navigation').height()*0.283
    })
});

//Implementing tabbar in 00_3_forgotID.html
$(document).ready(function(){
   
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
   
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
   
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
   
});