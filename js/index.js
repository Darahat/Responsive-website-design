

// make a function ready to run
$(document).ready(function() {
	// here i keep data toogle type as collapse side and make a variable sideslider and keeping the value
	var sideslider = $('[data-toggle=collapse-side]');
	//we taking two attribute data target and data target 2 for collapse in and out
	var sel = sideslider.attr('data-target');
	var sel2 = sideslider.attr('data-target-2');
	// here make a function sides slider ..when chese burger icon will be click than it will be called
	sideslider.click(function(event){
		$(sel).toggleClass('in');
		$(sel2).toggleClass('out');
	});

	$('ul.tabs').tabs();
	  $("#discover").click(function() {
	    $('ul.tabs').tabs('select_tab', 'travis');
	  });

		$('ul.tabs').tabs();
			$("#hire").click(function() {
				$('ul.tabs').tabs('select_tab', 'contact');
			});
});

// call toogle div clicking button
