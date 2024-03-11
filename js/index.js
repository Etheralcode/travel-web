(function ($) {
  "use strict";

  // wow js
  new WOW().init();

  // owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
})(jQuery);
