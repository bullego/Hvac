$(document).ready(function(){		
	//______________________________vertical scroll
	$(window).scroll(function() {				
		//______________________________appear fixed-nav
		if ($(this).scrollTop() > 140) {
			$('.navbar-scroll').fadeIn();
		} else {
			$('.navbar-scroll').fadeOut();
		}
		//______________________________appear orange botoom marker (without mobile)
		//______________________________col-lg
		if ($(this).scrollTop() <= 725 && $("body").width() >= 1200) {
			$('ul.navbar-nav > li').removeClass('active');
			$('ul.navbar-nav > li:eq(0)').addClass('active');
			$('.navbar-scroll li:eq(0)').addClass('active');
		} else if ($(this).scrollTop() > 725 && $(this).scrollTop() <= 1380 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(1)').addClass('active');
		} else if ($(this).scrollTop() > 1380 && $(this).scrollTop() <= 2900 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(2)').addClass('active');
		} else if ($(this).scrollTop() > 2900 && $(this).scrollTop() <= 3861 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(3)').addClass('active');
		} else if ($(this).scrollTop() > 3861 && $(this).scrollTop() <= 4578 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(4)').addClass('active');
		} else if ($(this).scrollTop() > 4578 && $(this).scrollTop() <= 5250 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(5)').addClass('active');
		} else if ($(this).scrollTop() > 5250 && $("body").width() >= 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(6)').addClass('active');
		} 
		//______________________________col-md
		  else if ($(this).scrollTop() < 1025 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('ul.navbar-nav > li:eq(0)').addClass('active');
			$('.navbar-scroll li:eq(0)').addClass('active');
		} else if ($(this).scrollTop() > 1025 && $(this).scrollTop() <= 1825 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(1)').addClass('active');
		} else if ($(this).scrollTop() > 1825 && $(this).scrollTop() <= 3350 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(2)').addClass('active');
		} else if ($(this).scrollTop() > 3350 && $(this).scrollTop() <= 4175 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(3)').addClass('active');
		} else if ($(this).scrollTop() > 4175 && $(this).scrollTop() <= 4940 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(4)').addClass('active');
		} else if ($(this).scrollTop() > 4940 && $(this).scrollTop() <= 5600 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(5)').addClass('active');
		} else if ($(this).scrollTop() > 5600 && $('body').width() >= 992 && $("body").width() < 1200) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(6)').addClass('active');
		}
		//______________________________col-sm
		  else if ($(this).scrollTop() < 765 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('ul.navbar-nav > li:eq(0)').addClass('active');
			$('.navbar-scroll li:eq(0)').addClass('active');
		} else if ($(this).scrollTop() > 765 && $(this).scrollTop() <= 1485 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(1)').addClass('active');
		} else if ($(this).scrollTop() > 1485 && $(this).scrollTop() <= 2800 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(2)').addClass('active');
		} else if ($(this).scrollTop() > 2800 && $(this).scrollTop() <= 3600 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(3)').addClass('active');
		} else if ($(this).scrollTop() > 3600 && $(this).scrollTop() <= 5080 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(4)').addClass('active');
		} else if ($(this).scrollTop() > 5080 && $(this).scrollTop() <= 6250 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(5)').addClass('active');
		} else if ($(this).scrollTop() > 6250 && $('body').width() >= 768 && $("body").width() < 992) {			
			$('ul.navbar-nav > li').removeClass('active');
			$('.navbar-scroll li:eq(6)').addClass('active');
		}
		//______________________________appear circle button "toTOP"
		if ($(this).scrollTop() > 791) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}								
	});	
	//______________________________appear circle button "toTOP" part.2
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});	
    //______________________________remove mobile nav for desktop
	$(window).innerWidth(function() {
        
        if ($("body").width() > 750) { //768px-17px=750px
        	$("#main-navbar").removeClass("navbar-inverse");
        }        		
	})
	//______________________________appear mobile nav if window resize
	$(window).resize(function() {
        
        if ($("body").width() > 750) { //768px-17px=750px
        	$("#main-navbar").removeClass("navbar-inverse");
        } else {
        	$("#main-navbar").addClass("navbar-inverse");
        }        		
	})
    //______________________________remove desktop slider
	$(window).width(function() {

		if ($('body').width() < 768) {
			$('#mobile-slide-del').removeClass('')
		}
	})   
    //______________________________change color mobile nav button
    $("ul#scroll-nav > li:has(a)").click( function(){
    	$('ul#scroll-nav > li:has(a)').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');    	
    }) 
	//______________________________screen4
	$('.content4-sl').slick({
		autoplay: false,
		variableWidth: true,
		dots: true,	
		responsive: [
			{
				breakpoint: 767,

				settings: {
					autoplay: false, //true,
					autoplaySpeed: 2000,
					cssEase: 'ease-in',					
					arrows: true
				}
			}
		]
	});
	//______________________________screen6_tabs
	//$( "#tabbbs" ).tabs();
	$()
	//______________________________screen6_slider in tabs
	$('.content6-sl').slick({
		slidesToShow: 3,
 	    slidesToScroll: 3,
		autoplay: false,
		//variableWidth: true,
		//centerMode: true,
  	    //centerPadding: '60px',    
		infinite: true, 	
		dots: true	
	});
	$('.content6-mobile-sl').slick({
		slidesToShow: 1,
 	    slidesToScroll: 1,
		autoplay: false,
		//variableWidth: true,
		//centerMode: true,
  	    //centerPadding: '60px',    
		infinite: true, 	
		dots: true	
	}); 	
	
});









