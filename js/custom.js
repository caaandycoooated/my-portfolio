

$(window).on('scroll', function (e) {
   var top = $(window).scrollTop() + $(window).height(),
       isVisible = top > $('.services-container').offset().top;

   $('.designer-card').toggleClass('animate__animated animate__fadeIn', isVisible);
   $('.developer-card').toggleClass('animate__animated animate__fadeIn', isVisible);
});
