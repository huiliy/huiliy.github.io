$(document).ready(function(){

	$(".button-projects").click(function(event){
		event.preventDefault();
		var goTop = $(".projects").offset().top;
     $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart");

    } );
    $(".button-home").click(function(event){
    	event.preventDefault();
		var goTop = $(".splash").offset().top;
	   $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart");
	} );

    $(".button-about").click(function(event){
    	event.preventDefault();
    	 var goTop = $(".about").offset().top; 
       	 $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart");
    } );

    $(".button-contact").click(function(event){
    	event.preventDefault();
    	 var goTop = $(".contact").offset().top; 
        $("html, body").animate({scrollTop:goTop}, 1000,"easeInOutQuart");
    
    } );
    $(".button-home").click(goToSplash);
    $(".button-about").click(goToAbout);
    $(".button-contact").click(goToContact);

    window.st = ScrollReveal();
    st.reveal('.splash .header', { duration:1200});
    st.reveal('.splash .description' ,{ duration:1200, delay:500, reset: true});
    st.reveal('.project-item' ,{ duration:1200, reset: true}, 150);
});
    
    function goToSplash (event) {
    	event.preventDefault();
    	var goTopPosition = $ (".splash").offset().top;
    	$("html, body").animate({scrollTop:goTopPosition}, 1000,"easeInOutQuart");
	} 
    
    function goToAbout (event) {
    	event.preventDefault();
    	var goTopPosition = $ (".about").offset().top;
    	$("html, body").animate({scrollTop:goTopPosition}, 1000,"easeInOutQuart");
	} 

    function goToContact (event) {
    	event.preventDefault();
    	var goTopPosition = $ (".contact").offset().top;
    	$("html, body").animate({scrollTop:goTopPosition}, 1000,"easeInOutQuart");
	} 
