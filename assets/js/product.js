var btn = $('#button4');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function LogHide() {
  $(".quick").hide()
}
LogHide()
$(document).ready(function () {
  $(".p1").click(function () {
    $(".quick").slideToggle();
  });
});



function menuHide() {
  let menus = document.querySelectorAll(".nbm")
  menus.forEach(m => {
    $(m).hide()
  })
}


var menu = document.querySelector("#bars")
var slidebar = document.querySelector("#slidebar")
var exit = document.querySelector('#bars-exit')

exit.addEventListener("click", function () {
  slidebar.style.width = "0%"
})

menu.addEventListener("click", function (e) {
  e.preventDefault()

  if (slidebar.style.width === "70%") {
    slidebar.style.width = "0%"
  }
  else {
    slidebar.style.width = "70%"
  }
})

var catmenu = document.querySelector("#depart-category")
var catslide = document.querySelector("#category-slidebar")
var catexit = document.querySelector('#cat-exit')

catexit.addEventListener("click", function () {
  catslide.classList.remove('active-cat-sbar')

})

catmenu.addEventListener("click", function () {
  catslide.classList.add('active-cat-sbar');
})

menuHide()



$(".boxh").click(function () {
  $("#pdrop-menuh").slideToggle()
});

$(".boxs").click(function () {
  $("#pdrop-menus").slideToggle()
});
$(".boxp").click(function () {
  $("#pdrop-menup").slideToggle()
});
$(".boxb").click(function () {
  $("#pdrop-menub").slideToggle()
});