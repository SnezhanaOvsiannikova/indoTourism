$(document).ready(function () {
	var slider = $('#slider');

	slider.on('init', function() {
		setTimeout(function() {
			$('.img-scale').imageScale({
				rescaleOnResize: true,
				align: 'center'
			});
		}, 500);
	});

	slider.slick({
		autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        fade: true,
        cssEase: 'linear'
	});
	$('.open-popup-link').magnificPopup({
	  	type:'inline',
	  	midClick: true
	});
});


