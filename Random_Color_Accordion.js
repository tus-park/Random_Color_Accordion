
  var list = $('.conlist');
  var con = $('.innCon');

  for(i = 0; i <= list.length; i++){

   var color = 'rgb('+ (Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+')';
    $(list[i]).css('background-color', color);
     //box random bg

    $(list[i]).on('click',function(){
      $(this).toggleClass('open');
      //$(this).toggleSlide('fadeIn');
      var color2 = 'rgb('+ (Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+')';
      $(this).css('background-color', color2);

      var open = $(this).hasClass('open');
      if(open){
        var color2 = 'rgb('+ (Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+','
                +(Math.floor(Math.random()*100)+155)+')';
        $(this).css('background-color', color2);
        $(this).stop().animate({ height : 150+'px'
                               },1000,'easeOutBounce');
        $(this).children('.innCon').stop().animate({ opacity:1 },1500);

      }else{
        $(this).stop().animate({ height : 50+'px'
                               },1000,'easeOutBounce');
        $(this).children('.innCon').stop().animate({ opacity:0 });
      }
   });
 }
