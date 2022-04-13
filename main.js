$(function() {
$('.main-content__slider').slick({
slidesToShow: 2,
slidesToScroll: 2,
dots: true,
arrows: false,
responsive: [

    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});
})
