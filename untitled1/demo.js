
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
   navigator.geolocation.getCurrentPosition(onSuccess,onError);
   function onSuccess(position){
      //返回用户位置
      //经度
      var longitude =position.coords.longitude;
      //纬度
      var latitude = position.coords.latitude;
   }
   //失败时
   function onError(error){
      switch(error.code){
         case 1:
            alert("位置服务被拒绝");
            break;
         case 2:
            alert("暂时获取不到位置信息");
            break;

         case 3:
            alert("获取信息超时");
            break;

         case 4:
            alert("未知错误");
            break;
      }
   }
});

