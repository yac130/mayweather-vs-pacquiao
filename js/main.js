( function( $ ) {

	var clock; 
		$(document).ready(function() {
		    // Grab the current date 
		    var currentDate = new Date(); 
		    // Set some date in the future. ***change to desired date***
		    //var futureDate = new Date(2014, 11, 23, 6, 0, 0); 
		    var futureDate = new Date(2015, 4, 1, 19, 0, 0); //fixed as per comments
		    // Calculate the difference in seconds between the future and current date 
		    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000; 
		    // Instantiate a coutdown FlipClock 
		    clock = $('.clock').FlipClock(diff, { clockFace: 'DailyCounter', language:'es-es', countdown: true }); 
	});
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');  
	
	function adjustWindow(){
     
	    // Get window size
	    winH = $window.height();
	    winW = $window.width();
	     
	    // Keep minimum height 550
	    if(winH <= 550) {
	        winH = 550;
	    }
	     
	    // Init Skrollr for 768 and up
	    if( winW >= 768) {
	 
	        // Init Skrollr
	        var s = skrollr.init({
	            forceHeight: false
	        });
	 
	        // Resize our slides
	        $slide.height(winH);
	 
	        s.refresh($('.homeSlide'));
	 
	    } else {
	 
	        // Init Skrollr
	        var s = skrollr.init();
	        s.destroy();
	    }
	 
	    // Check for touch
	    if(Modernizr.touch) {
	 
	        // Init Skrollr
	        var s = skrollr.init();
	        s.destroy();
	    }
	 
	};

	function initAdjustWindow() {
	    return {
	        match : function() {
	            adjustWindow();
	        },
	        unmatch : function() {
	            adjustWindow();
	        }
	    };
	}
	
	enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

		
} )( jQuery );
