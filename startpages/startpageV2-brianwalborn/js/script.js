($(function(){
  // top button click events
  $('.circle').click(function(){
    $('.overlay').addClass('open');
  });
	$('.circleOne').click(function(){
		$('.develop').addClass('open');
	});
	$('.circleTwo').click(function(){
		$('.social').addClass('open');
	});
	$('.circleThree').click(function(){
		$('.shop').addClass('open');
	});
	$('.circleFour').click(function(){
		$('.learn').addClass('open');
	});
	$('.circleFive').click(function(){
		$('.finance').addClass('open');
	});

  // close modal after clicking a link or the background
  $('a').click(function(){
    $('.overlay').removeClass('open');
    $('.modal').removeClass('open');
  });
  $('.overlay').click(function(){
    $(this).removeClass('open');
    $('.modal').removeClass('open');
  });

  // weather
  $.simpleWeather({
    location: 'Cleveland, OH',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      // set the icon based on current conditions
      var theIcon;
      switch(weather.currently) {
        case 'Cloudy/Windy':
        case 'Mostly Cloudy':
        case 'Cloudy':
          theIcon = 'ion-ios-cloudy'
          break;
        case 'Sunny':
        case 'Fair':
          theIcon = 'ion-ios-sunny'
          break;
        case 'Partly Cloudy':
          theIcon = 'ion-ios-partlysunny'
          break;
        case 'Rainy':
        case 'Light Rain':
          theIcon = 'ion-ios-rainy'
          break;
        case 'Snowy':
        case 'Light Snow':
          theIcon = 'ion-ios-snowy'
        default:
          break;
      }

      icon = '<i class="'+theIcon+'"></i>';
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

      $('#weatherIcon').html(icon);
      $('#weather').html(html);
    },
    error: function(error) {
      $('#weather').html('<p>'+error+'</p>');
    }
  });
}));
