
/**************************************************** LAZY LOAD ****************************************************/

lazyload();














/**************************************************** VIDEOS ****************************************************/


$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll load', function () {

	$(".overview video, .project video:not(.player)").each(function () {
		if ($(this).isInViewport()) {
			$(this)[0].play();
			$(this).addClass('play');
		} else {
			$(this)[0].pause();
			$(this).removeClass('play');
		}
	});

	if ($('.intro video').length > 0) {
		if ($(window).scrollTop() >= $(window).height() / 4) {
			$('.intro video')[0].pause();
		} else {
			$('.intro video')[0].play();
		}
	}

});


