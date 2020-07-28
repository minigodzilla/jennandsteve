(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function() {

  	$('.wd-page').click(function() {
  		let thisPage = $(this);
  		let nextPage = $(this).next();
  		let nextInput = nextPage.find('.form-label-group:nth-of-type(1) input');
  		nextPage.addClass('wd-opened');
  		nextInput.focus();

  		// setTimeout(function() {
	  	// 	nextInput.focus();
  		// }, 1000);
  	});

  });
})(jQuery); // End of use strict
