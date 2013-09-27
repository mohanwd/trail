$(window).load(function(){
// load on DOM ready
$(function() {
    // when you click the link w/ a class of 'h1'
	$('.h1').click(function() {
        // scroll to the DIV w/ an ID of 'home'
        $.scrollTo( '#1', 800, {easing:'swing'} );
		$(this).addClass('iamactive');
		$('.h5').removeClass('iamactive');
		$('.h2').removeClass('iamactive');
		$('.h3').removeClass('iamactive');
		$('.h4').removeClass('iamactive');
            });
    $('.h2').click(function() {
        // scroll to the DIV w/ an ID of 'data'
        $.scrollTo( '#2', 800, {easing:'swing'} );
		$(this).addClass('iamactive');
		$('.h1').removeClass('iamactive');
		$('.h5').removeClass('iamactive');
		$('.h3').removeClass('iamactive');
		$('.h4').removeClass('iamactive');
               
    });
	$('.h3').click(function() {
        // scroll to the DIV w/ an ID of 'analysis'
        $.scrollTo( '#3', 800, {easing:'swing'} );
		$(this).addClass('iamactive');
		$('.h1').removeClass('iamactive');
		$('.h2').removeClass('iamactive');
		$('.h4').removeClass('iamactive');
		$('.h5').removeClass('iamactive');
            });
	$('.h4').click(function() {
        // scroll to the DIV w/ an ID of 'contribute'
        $.scrollTo( '#4', 800, {easing:'swing'} );
		$(this).addClass('iamactive');
		$('.h1').removeClass('iamactive');
		$('.h2').removeClass('iamactive');
		$('.h3').removeClass('iamactive');
		$('.h5').removeClass('iamactive');
               
    });
	$('.h5').click(function() {
        // scroll to the DIV w/ an ID of 'custom'
        $.scrollTo( '#5', 800, {easing:'swing'} );
		$(this).addClass('iamactive');
		$('.h1').removeClass('iamactive');
		$('.h2').removeClass('iamactive');
		$('.h3').removeClass('iamactive');
		$('.h4').removeClass('iamactive');
            });
	$('#sfb').click(function(){
		window.open("http://www.facebook.com/wiredelta");
	});
	$('#swd').click(function(){
		window.open("http://www.wiredelta.com");
	});
	$('#sllin').click(function(){
	window.open("http://www.linkedin.com/company/wiredelta");
	});
	$('#stwi').click(function(){
	window.open("https://twitter.com/WireDeltaInc");
	});
	$('#sgp').click(function(){
	window.open("https://plus.google.com/u/0/117762780118904986030/posts");
	});
	$('#smore').mouseenter(function(){
		$('#stwi').show();
		$('#sllin').show();
		$('#sgp').show();
	});
	$('#smore').mouseleave(function(){
		$('#stwi').hide();
		$('#sllin').hide();
		$('#sgp').hide();
		});
		
	
});
});//]]>  
