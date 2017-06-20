$(document).ready(function () {
	var slider = $('#slider');

	slider.on('init', function() {
		setTimeout(function() {
			$('.img-scale').imageScale({
				rescaleOnResize: true,
				align: 'center'
			});
		}, 100);
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
})

// (function () {
//     'use strict';
//     $(document).ready(function () {
//         $('#slider').slick({
//             dots: true,
//             infinite: true,
//             arrows: false,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             swipeToSlide: true,
//             adaptiveHeight: true,
//             adaptiveWidth: true,
//             fade: true,
//             cssEase: 'linear',
//             // responsive: [
//             //     {
//             //         breakpoint: 1024,
//             //         settings: {
//             //             slidesToShow: 1,
//             //             slidesToScroll: 1,
//             //             infinite: true
//             //         }
//             //     },
//             //     {
//             //         breakpoint: 600,
//             //         settings: {
//             //             slidesToShow: 1,
//             //             slidesToScroll: 1
//             //         }
//             //     },
//             //     {
//             //         breakpoint: 480,
//             //         settings: {
//             //             slidesToShow: 1,
//             //             slidesToScroll: 1
//             //         }
//             //     }
//             // ]
//         });
//     });
// }());