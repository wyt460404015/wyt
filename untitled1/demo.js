
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

function subCheck(){
   var city = $('.search input').val();
   //var url = 'https://free-api.heweather.com/v5/weather?city=';
   //var apikey = '&key=d50088d4d62649aaa6157d71ea1c94f8';
   $.ajax({
      url:'https://free-api.heweather.com/v5/weather?city='+city+'&key=d50088d4d62649aaa6157d71ea1c94f8',
      type:'GET',
      success:function(data){
         //var MyJson = JSON.parse(data);
         var city = data['HeWeather5'][0]['basic']['city'];
         var cond = data['HeWeather5'][0]['now']['cond']['txt'];
         //$('.weather .city').html(city);
         //$('.weather .cond').html(cond);

          jump(city, cond);
      },
      error:function(){
         alert('出错了');
      }
   });
}

function jump(city, cond){


    window.location.href='./demo2.html?city='+city+'&cond='+cond;

}