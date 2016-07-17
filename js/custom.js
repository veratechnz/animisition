(function(){

	Reveal.initialize({

	    // Display controls in the bottom right corner
	    controls: true,

	    // Display a presentation progress bar
	    progress: true,

	    // Display the page number of the current slide
	    slideNumber: false,

	    // Push each slide change to the browser history
	    history: false,

	    // Enable keyboard shortcuts for navigation
	    keyboard: true,

	    // Enable the slide overview mode
	    overview: true,

	    // Vertical centering of slides
	    center: true,

	    // Enables touch navigation on devices with touch input
	    touch: true,

	    // Loop the presentation
	    loop: true,

	    // Change the presentation direction to be RTL
	    rtl: false,

	    // Randomizes the order of slides each time the presentation loads
	    shuffle: false,

	    // Turns fragments on and off globally
	    fragments: true,

	    // Flags if the presentation is running in an embedded mode,
	    // i.e. contained within a limited portion of the screen
	    embedded: false,

	    // Flags if we should show a help overlay when the questionmark
	    // key is pressed
	    help: true,

	    // Flags if speaker notes should be visible to all viewers
	    showNotes: false,

	    // Number of milliseconds between automatically proceeding to the
	    // next slide, disabled when set to 0, this value can be overwritten
	    // by using a data-autoslide attribute on your slides
	    autoSlide: 0,

	    // Stop auto-sliding after user input
	    autoSlideStoppable: true,

	    // Use this method for navigation when auto-sliding
	    autoSlideMethod: Reveal.navigateNext,

	    // Enable slide navigation via mouse wheel
	    mouseWheel: false,

	    // Hides the address bar on mobile devices
	    hideAddressBar: true,

	    // Opens links in an iframe preview overlay
	    previewLinks: false,

	    // Transition style
	    transition: 'convex', // none/fade/slide/convex/concave/zoom

	    // Transition speed
	    transitionSpeed: 'slow', // default/fast/slow

	    // Transition style for full page slide backgrounds
	    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

	    // Number of slides away from the current that are visible
	    viewDistance: 3,

	    // Parallax background image
	    parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

	    // Parallax background size
	    parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

	    // Number of pixels to move the parallax background per slide
	    // - Calculated automatically unless specified
	    // - Set to 0 to disable movement along an axis
	    parallaxBackgroundHorizontal: null,
	    parallaxBackgroundVertical: null,

	    // The "normal" size of the presentation, aspect ratio will be preserved
	    // when the presentation is scaled to fit different resolutions. Can be
	    // specified using percentage units.
	    width: "100%",
	    height: "100%",

	    // Factor of the display size that should remain empty around the content
	    margin: 0.1,

	    // Bounds for smallest/largest possible scale to apply to content
	    minScale: 0.2,
	    maxScale: 1.5

	});


	Reveal.addEventListener( 'slidechanged', function( event ) {

		// Various slide fade in and transition effects
		var slideIndex = event.indexh;

		if (slideIndex === 2) {
			$('#cImg').fadeIn(100, function(){
				$('#cTitle').fadeIn(2000);
			});
		}  else if (slideIndex === 4) {
			$('#finalTitle').fadeIn(6000);
		} else if (slideIndex === 1) {
			$('h3').fadeIn(4000);
		} else if (slideIndex === 3) {
			$('h3').fadeIn(4000);
		};


	} );

	var firstTitle = function(){
		$('#firstTitle').fadeIn(2000);
	};

	// Trigger first fade in **function above
	firstTitle();

}());

