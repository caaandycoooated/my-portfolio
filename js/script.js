(function($) {
  'use strict';

  /** PRE LOADER **/

  $(window).on('load', function() {
    $('#preloader').fadeOut(2500, function() {
      $(this).remove();
    });
  });

  /** NAVIGATION **/

	if ($(window).width() < 992) {
		$('#navigation .dropdown-toggle').on('click', function() {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
  }

  /** SCROLLING **/

  var scroll = new SmoothScroll('a[href*="#"]');

  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }

    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }

  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $('.navigation').addClass('sticky-header');
    }

    else {
      $('.navigation').removeClass('sticky-header');
    }
  });
})(jQuery);
