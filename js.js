
$(document).ready(function () {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
   
  });
  autoplay()
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
   
  }
 
  
  
});