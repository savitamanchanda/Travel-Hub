/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5075fa32f5msh2d37ef7bc1f9242p1fc222jsn8d4befb79511',
		'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
	}
};

fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

      const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5075fa32f5msh2d37ef7bc1f9242p1fc222jsn8d4befb79511',
            'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
        }
    };
    


    const opt = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5075fa32f5msh2d37ef7bc1f9242p1fc222jsn8d4befb79511',
            'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
    };
    
    fetch('https://aerodatabox.p.rapidapi.com/flights/number/DL47?withAircraftImage=false&withLocation=false', opt)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        */

        var welcome = $(".welcome");
        var travelHub =$(".title");
        var click = $(".click");
        var modal = $(".modal");
        var modalBackground = $(".modal-background");
        var modalCard = $(".modal-card");
        var modalCardHead = $(".modal-card-head");
        var modalCardTitle = $(".modal-card-title");
        var modalCardBody = $(".modal-card-body");
        var text = $(".text");
        var modalCardFoot = $(".modal-card-foot");
        var buttonSuccess = $(".button is-success");
        var button = $(".button");
        var containerFlight = $(".container flight");
        var flightNumber = $(".flight_number");
        var airline = $(".airline");
        var aircraft = $(".aircraft");
        var status = $(".status");
        var aDtime = $(".a_dtime");
        var sDtime = $(".s_dtime");
        var dAirport = $(".d_airport");
        var aAtime = $(".a_atime");
        var sAtime = $(".s_atime");
        var containerHotel = $(".containerHotel");
        var hotel = $(".hotel");
        var ratings = $(".ratings");
        var another = $(".another");
        
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

    });
  });