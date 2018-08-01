$(document).ready(function(){

	var url = 'https://api.darksky.net/forecast/';
	var key = '10f9c5ffa51b83fed8f6ef04894f766d';
	var coords = {
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904',
		lsc: '-29.9026691,71.25193739999997'
	}

	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto']

	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

	$('#select').on('change', function(){
		$.ajax({
			url: url + key + '/' + coords[$(this).val()] + '&' + queryParams[1] + '&' + queryParams[2],
			method:'GET',
			dataType: 'JSONP'
		}).then(function(data){
			console.log(data);
			$('#resumen').text(data.currently.temperature + data.currently.summary)
		});
	})
});


