$(document).ready(function(){
  const $header = $('header'),
        $headerHeight = $header.outerHeight()
  // let   $subHeight = $(this).find("ul").outerHeight()
  // **** $subHeight값은 ul이 존재하면 값이 부여된다.
  // **** let   $subHeight = $(this).find("ul").outerHeight() 선언을 hover 안으로 넣었다.

  // alert($(this).find("ul").outerHeight());
    $("nav div").hover(function(){
      let   $subHeight = $(this).find("ul").outerHeight()
      // ****4번줄에 있던 $subHeight선언을 hover시로 바꿨다.
      // alert($(this).find("ul").outerHeight());
      
      // $(this).find("ul").css("opacity",1)
      $header.stop().animate({height:$headerHeight+$subHeight +"px"},300);
      $(this).find("ul").stop().fadeIn(300);
    },function(){  
      // $(this).find("ul").css("opacity",0)
      $header.stop().animate({height:$headerHeight},300);
      $(this).find("ul").stop().fadeOut(300);
    })
    // $subHeight=0;
    // alert($subHeight);

    $("ul.mslide").bxSlider({
      mode: 'fade',
      auto: true,
      controls: true    
    })
    AOS.init();
    // 이 문서에서 AOS 사용할수 있게 기본적으로 깔아놓은상태임  

    $(".bxcover ul").bxSlider({
      maxSlides:4,
      minSlides:2,
      moveSlides:1,
      slideWidth:300,
      slideMargin:25,
      auto:true,
      pause:3000,
      controls:false,
      pager:false
    })
  
})