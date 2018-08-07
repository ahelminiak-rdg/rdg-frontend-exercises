$(document).ready(function() {
  $( ".collapsed" ).click(function() {
		$(this).toggleClass('expanded');
		return false;
  });

$('.exercise-1-link').click(function() {
		console.log($(this).text());
});
	
$('.slider').slick({
		infinite: true,
	});

$('.check-class').click(function() {
	if ($(this).hasClass('highlighted')){
		$(this).removeClass('highlighted');
		console.log("TRUE");
	} else {
		console.log("FALSE");
	}
});


		

});
