$( document ).ready(function() {

	$(".hoverTarget").mouseenter(function(){
		$(this).siblings(".redOpacity").css({"background":"rgba(170, 28, 0, 0.3)"});
   		$(this).siblings(".imgTitle").css({"transform":"translate(0px,-250px)"});
   		$(this).siblings(".imgDesc").css({"transform":"translate(0px,-250px)", "opacity": "1"});

	});

	$(".hoverTarget").mouseout(function(){
		$(this).siblings(".redOpacity").css({"background":"rgba(170, 28, 0, 0)"});
	   	$(this).siblings(".imgTitle").css({"transform":"translate(0px,0px)"});
		$(this).siblings(".imgDesc").css({"transform":"translate(0px,0px)", "opacity": "0"});
	});
});