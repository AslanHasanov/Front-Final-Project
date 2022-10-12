$('.reklam').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var menu=document.querySelector("#bars")
var slidebar=document.querySelector("#slidebar")
var exit=document.querySelector('#bars-exit')

exit.addEventListener("click",function(){
  slidebar.style.width="0%"
})

menu.addEventListener("click",function (){
    if(slidebar.style.width==="70%"){
        slidebar.style.width="0%"
    }
    else{
        slidebar.style.width="70%"
    }
})