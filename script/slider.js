$(document).ready(function () {
     $('.owl-carousel').owlCarousel({
          items: 4,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 1000,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
               0: {
                    items: 1,
                    nav: true
               },
               600: {
                    items: 3,
                    nav: false
               },
               1000: {
                    items: 5,
                    nav: true,
                    loop: true
               }
          }
     })
});

// Testimonial
$(document).ready(function () {
     $('.testimonials').slick({
          autoplay: true,
          infinite: true,
          speed: 400,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [{
               breakpoint: 992,
               settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
               }
          }]
     })
});