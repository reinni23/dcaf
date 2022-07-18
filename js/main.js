//하단 이미지 턴
const Turnimg = document.getElementsByClassName("turnimg");
for (let i = 0; i < Turnimg.length; i++) {
  setTimeout(function () {
    Turnimg[i].style.transform = "rotateY(0)";
  }, 300 * i);
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 160) {
      $(".h_nav").css("background", "#000");
      $(".h_nav a").css("color", "#fff");
      $(".h_view>span").css("background", "#fff");
      $(".logo_nav").css("display", "block");
      $("#header").addClass("fixed");
      $(".form").css("display", "none");
    } else {
      $(".h_nav").css("background", "#fff");
      $(".h_nav a").css("color", "#000");
      $(".h_view>span").css("background", "#000");
      $(".logo_nav").css("display", "none");
      $("#header").removeClass("fixed");
      $(".form").css("display", "block");
    }
  });
});

var swiper = new Swiper(".Scrollbar", {
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
