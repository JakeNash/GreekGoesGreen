"use strict";

(function() {
	window.onload = function() {
		initialize();
		google.maps.event.addDomListener(window, 'load', initialize);
  	};

  	function initialize() {
    	var mapOptions = {
      		center: { lat: -34.397, lng: 150.644},
      		zoom: 8
    	};    
    	var map = new google.maps.Map(document.getElementById('main-window'), mapOptions);
  	}
})();