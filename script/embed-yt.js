// Get and autoplay Video from data
function autoPlayYouTubeModal() {
     var triggerOpen = $("body").find('[data-tagVideo]');
     triggerOpen.click(function () {
          var theModal = $(this).data("bs-target"),
               videoSRC = $(this).attr("data-tagVideo"),
               videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.btn-close').click(function () {
               $(theModal + ' iframe').attr('src', videoSRC);
          });
     });
}

$(document).ready(function () {
     autoPlayYouTubeModal();
});

<
!--Trigger-- >
<
button data - bs - toggle = "modal"
data - tagVideo = "https://www.youtube.com/embed/zcX7OJ-L8XQ"
data - bs - target = "#videoModal" > Video < /button>

     <
     !--Modal-- >
     <
     div class = "modal fade"
id = "videoModal"
data - bs - backdrop = "static"
data - bs - keyboard = "false"
tabindex = "-1"
aria - labelledby = "videoModalLabel"
aria - hidden = "true" >
     <
     div class = "modal-dialog" >
     <
     div class = "modal-content" >
     <
     div class = "modal-header" >
     <
     button type = "button"
class = "btn-close"
data - bs - dismiss = "modal"
aria - label = "Close" > < /button> < /
     div > <
     div class = "modal-body" >
     <
     div class = "ratio ratio-16x9" >
     <
     iframe src = ""
allow = "autoplay;"
allowfullscreen > < /iframe> < /
     div > <
     /div> < /
     div > <
     /div> < /
     div >