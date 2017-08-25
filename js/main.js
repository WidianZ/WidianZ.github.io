$( document ).ready(function() {
  $('.slider-in').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.promotionFrame').click(function() {
    $('.lightbox').show();
  });

  $('.lightbox-overlay').click(function() {
    $('.lightbox').hide();
  });
});
