$(document).ready(function () {
	var slider = $('#slider, #main-slider' );

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
	$('.programs article .content-block').matchHeight();
	w3.includeHTML();
});

function initMap() {
	"user strice";
	var myOptions = {
		zoom:10,
		center: new google.maps.LatLng(-8.6075754,115.1863163),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapElem = document.getElementById('map');

	if(mapElem == null) { return; }
	map = new google.maps.Map(mapElem, myOptions);

	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(-8.6075754,115.1863163)
	});

	infowindow = new google.maps.InfoWindow({content:'<strong>Название</strong><br>Jl. Langon No.16 <br>Sempidi<br> Mengwi <br>Kabupaten Badung, Bali 80116<br>Indonesia'});

	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map,marker);
	});

	infowindow.open(map,marker);

	map.set('styles',
		[
			{
				"featureType":"administrative",
				"elementType":"labels.text.fill",
				"stylers": [
					{
						"color":"#444444"
					}
				]
			},
			{
				"featureType":"landscape",
				"elementType":"all",
				"stylers": [
					{
						"color":"#f2f2f2"
					}
				]
			},
			{
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#46bcec"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    }
		]
	);
};

