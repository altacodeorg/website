$( "#threebar" ).click(function() {
	$('#mobileNav').addClass("animated slideInLeft");
	$('#mobileNav').show();
});

$( "#cross" ).click(function() {
	$('#mobileNav').hide();
});
