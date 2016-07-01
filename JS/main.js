 $(document).ready(function(){

 	// Lowers initial videos volume
 	$('video').prop('volume', 0.2);


    // Runs function whenever the Spacebar key is pressed down.
    // 1. Video leaves the screen by changing the css property.
    // 2. Mutes the current Video (videoA).
    // 3. find and unmute videoB & vice versa.


    // Key press down
 	$(document).on('keydown', function(event){
 		if (event.keyCode === 82){
 			$('#defaultcont').css('top', -2000 + 'px');
 			$('#defaultcont').find('video').prop('muted', true);
 			$('#exposecont').find('video').prop('muted', false);
 		}
 	});

 	// Key press up
	$(document).on('keyup', function(event){
		if (event.keyCode === 82){
			$('#defaultcont').css('top', 0 + 'px');
			$('#defaultcont').find('video').prop('muted', false);
			$('#exposecont').find('video').prop('muted', true);
		}
	});

  // R-Button Mouse down
$(document).ready(function(){
   $('.button_red').mouseup(function(){
     $('#defaultcont').css('top', -2000 + 'px');
     $('#defaultcont').find('video').prop('muted', true);
     $('#exposecont').find('video').prop('muted', false);
   });
 // R-button Mouse up
   $('.button_red').mousedown(function(){
     $('#defaultcont').css('top', 0 + 'px');
     $('#defaultcont').find('video').prop('muted', false);
     $('#exposecont').find('video').prop('muted', true);
    });
});

	// Runs function when any video plays.
	// Using For loop, place all videos in an array
	// Plays all video when any video is played.

	$('video').on('play', function(){
		for(var i=0; i<2; i++){
			$('video').get(i).play();
		}
	});

	// Pauses when any video pauses.

	$('video').on('pause', function(){
		for(var i=0; i<2; i++){
			$('video').get(i).pause();
		}
	});

 });
