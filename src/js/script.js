$(document).ready(function(){
$('.gamburger').on('click', function(){
  $('.main-nav').slideToggle();
})

var mql = window.matchMedia('all and (max-width: 767px)');
if (mql.matches) {
    $('.main-nav__item').on('click', function(){
    $('.main-nav').slideToggle();
});
} else {
    $('.main-nav__item').on('click', function(){
    $('.main-nav').css('display','flex');
    });
}
// $('.main-nav__item').on('click', function(){
//   $('.main-nav').slideToggle();
// });


$('.responsive').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1223,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
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
$('.responsive2').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1223,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
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
});
