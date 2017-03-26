
$(document).ready(function(){

   $('.soft li').on('mouseenter',function(){
      $(this).addClass('colorTab').siblings().removeClass('colorTab');
      var current = $(this);
      $('.soft li').each(function(i) {
         if ($(this).text() == current.text()) {
            $('.headerExtra div').eq(i).show().siblings().hide();
         }
      });
   });
   $('.soft li').on('mouseleave',function(){
      $(this).removeClass('colorTab');
      var current = $(this);
      $('.soft li').each(function(i) {
         if ($(this).text() == current.text()) {
            $('.headerExtra div').eq(i).hide();
         }
      });
   });
});

