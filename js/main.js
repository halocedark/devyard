
$( document ).ready(function() {

	function _(element) {
	    var element = document.querySelector(element);
	    return element;
	}

	var ArrowLeft    = $('#SliderWrapper #ArrowLeft');
	var ArrowRight   = $('#SliderWrapper #ArrowRight');
	var Slides       = $('#Slides');
	var CurrentSlide = 0;
	var SlideWidth   = Slides.find('.slide').width();
	var SlidesCount  = Slides.find('.slide').length;
	var TotalSlidesWidth = (SlideWidth * SlidesCount) - SlideWidth;
	var SlideSpeed   = 200;
	var SlideTime    = 10000;
	// Events
	ArrowRight.on('click', priorSlide);
	ArrowLeft.on('click', nextSlide);

	// Functions
	function nextSlide() {
		Slides.animate({
			marginLeft: '-=' +SlideWidth+'px'	
		}, SlideSpeed, function() {
			CurrentSlide++;
			if ( CurrentSlide === SlidesCount ) {
				Slides.css('margin-left', '0px');
				CurrentSlide = 0;	
			}	
		});
	}

	function priorSlide() {
		if ( CurrentSlide !== 0 ) {
			Slides.animate({
				marginLeft: '+=' +SlideWidth+ 'px'	
			}, SlideSpeed, function() {
				CurrentSlide--;
				if ( CurrentSlide === 0 ) {
					Slides.css('margin-left', -TotalSlidesWidth+'px');
					CurrentSlide = SlidesCount;	
				}	
			});
		}
	}

	setInterval(nextSlide, SlideTime);
	

});
