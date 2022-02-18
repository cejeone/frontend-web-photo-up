$(function () {
     $(document).scroll(function () {
          var $scroll = $(".scroll-top");
          $scroll.toggleClass("scrolled", $(this).scrollTop() > $scroll.height());
     });
});