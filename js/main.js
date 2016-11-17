$(document).ready(function() {

});

$(window).scroll(function() {
   if ($(this).scrollTop() > 299) {
      $("#nav-bar").css({
         "background": "rgba(0, 0, 0, 0.45)",
      });
   }
   
   if ($(this).scrollTop() < 299) {
      $("#nav-bar").css({
         "background": "rgba(0, 0, 0, 0.45)",
      });
   }
});
