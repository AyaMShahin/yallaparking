$(document).ready(function () {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;
  $("#date").attr("value", today); //displaying today's date
  //restricting date before today
  $("#date").attr("min", today);

  //Slick Slider
  $(".partners .content").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          dots: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerMode: true,
          dots: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5,
          infinite: true,
          centerMode: true,
          dots: true,
          focusOnSelect: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Places Slider

  $(".places .p-items").slick({
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  //Reviews Slider
  $(".community .c-content").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
