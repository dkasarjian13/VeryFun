/***************************************** IN VIEWPORT *****************************************/

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll load', function () {

    $("video.autoplay").each(function () {
        if ($(this).isInViewport()) {
            $(this)[0].play();
            $(this).addClass('play');
        } else {
            $(this)[0].pause();
            $(this).removeClass('play');
        }
    });

});

/***************************************** COOKIE *****************************************/

  $(".accept").click(function () { 
    $(".cookie").hide();
    $.cookie('cookies', 'yes', { expires: 30 });
  });
  
  if($.cookie('cookies') == 'yes'){
      $(".cookie").hide();
  } else if($.cookie('cookies') == 'no') {
      $(".cookie").hide();
  } else {
      $(".cookie").show();
  }

/***************************************** ANIMATED ICONS *****************************************/


function animate($el, attrs, speed) {
	speed = speed || 200;
	var start = {},
		timeout = 20,
		steps = Math.floor(speed/timeout),
		cycles = steps;
	
	$.each(attrs, function(k,v) {
		start[k] = $el.attr(k);
	});
	
	(function loop() {
		$.each(attrs, function(k,v) {
			var pst = (v - start[k])/steps;
			$el.attr(k, function(i, old) {
				return +old + pst;
			});
		});
	  if ( --cycles )
		  setTimeout(loop, timeout);
	  else
		  $el.attr(attrs);
	})();
}


if($(window).width() > 1024) {

	$('#filtericon').hover(function(){
	  animate($('#XMLID_17_'),{x:12},100);
	  animate($('#XMLID_18_'),{x:3},100);
	  animate($('#XMLID_19_'),{x:9},100);
	}, function(){
	  animate($('#XMLID_17_'),{x:9},100);
	  animate($('#XMLID_18_'),{x:14},100);
	  animate($('#XMLID_19_'),{x:5},100);
	});
	
	$('#listicon').hover(function(){
	  animate($('#XMLID_16_'),{y:13},100);
	  animate($('#XMLID_15_'),{y:3},100);
	  animate($('#XMLID_14_'),{y:8},100);
	  animate($('#line1'),{y:14},100);
	  animate($('#line2'),{y:4},100);
	  animate($('#line3'),{y:9},100);
	}, function(){
	  animate($('#XMLID_16_'),{y:3},100);
	  animate($('#XMLID_15_'),{y:8},100);
	  animate($('#XMLID_14_'),{y:13},100);
	  animate($('#line1'),{y:4},100);
	  animate($('#line2'),{y:9},100);
	  animate($('#line3'),{y:14},100);
	});

}

/***************************************** SERVICE RELATED *****************************************/

 
$(window).on('load resize', function(){

$('.section.related.servicebased').css('height', $('.section.related.servicebased > div').height() + 75);

});


/***************************************** MOBILE NAVIGATION *****************************************/

$(document).ready(function(){

	$('.menu-icon .icon.menu').on('click',function (){
		if($('.mobile-navigation').attr('data-click-state') == 0){
			$('.mobile-navigation').attr('data-click-state', 1);
			$('.mobile-navigation').addClass('open');
			$(this).attr('src','/assets/import/ICONS_DONE-01.svg');
			$('.column.filter').attr('data-click-state', 0);
			$('.column.filter').removeClass('mobileopen');
			$('.column.filter').addClass('closed');
			$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-05.svg');
		} else if($('.mobile-navigation').attr('data-click-state') == 1){
			$('.mobile-navigation').attr('data-click-state', 0);
			$('.mobile-navigation').removeClass('open');
			$(this).attr('src','/assets/import/ICONS_DONE-02.svg');
			$('.column.filter').attr('data-click-state', 0);
			$('.column.filter').removeClass('mobileopen');
			$('.column.filter').addClass('closed');
			$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-05.svg');
		}
	});

});

$(window).resize(function(){
	$('.mobile-navigation').attr('data-click-state', 0);
	$('.mobile-navigation').removeClass('open');
});

/***************************************** MOBILE PROJECTS OVERVIEW FILTER *****************************************/

	if($(window).width() < 1025) {
		$('.column.filter').attr('data-click-state','0');
		$('.column.filter').addClass('closed');
		$('.column.filter').removeClass('open');
		$('.thumbs, .related').removeClass('flip float blur');
	}

	if($(window).width() < 1281) {
		$('.column.filter').attr('data-click-state','0');
		$('.column.filter').addClass('closed');
		$('.column.filter').removeClass('open');
		$('.thumbs, .related').removeClass('flip float blur');
	}
	
	
	$('.menu-icon .icon.filter, .filter-icon-mobile').on('click',function (){
		
		/* if(window.location == 'http://bureauborsche.com/projects/' || window.location == 'http://bureauborsche.com/projects' || window.location == 'http://www.bureauborsche.com/projects/' || window.location == 'http://www.bureauborsche.com/projects'){
		} else {
			window.location = '/projects/#filter'
		} */
		
		if($('.column.filter').attr('data-click-state') == 0){
			$('.column.filter').attr('data-click-state', 1);
			$('.column.filter').removeClass('closed');
			$('.column.filter').addClass('mobileopen');
			$('.mobile-navigation').attr('data-click-state', 0);
			$('.mobile-navigation').removeClass('open');
			$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-01.svg');
			$('.menu-icon .icon.menu').attr('src','/assets/import/ICONS_DONE-02.svg');
			$('.search-bar').attr('data-click-state', 0);
			$('.search-bar').removeClass('open');
			$('.content img').removeClass('searchactive');
			$('.search-icon').text('Search');
			
			$('.content.overview').on('click', function(event){
				event.preventDefault;
				$('.column.filter').attr('data-click-state', 0);
				$('.column.filter').removeClass('mobileopen');
				$('.column.filter').addClass('closed');
				$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-05.svg');
			});
			
		} else if($('.column.filter').attr('data-click-state') == 1){
			$('.column.filter').attr('data-click-state', 0);
			$('.column.filter').removeClass('mobileopen');
			$('.column.filter').addClass('closed');
			$('.mobile-navigation').attr('data-click-state', 0);
			$('.mobile-navigation').removeClass('open');
			$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-05.svg');
		}
	});
	
	if(window.location.hash && window.location !== '/projects/' && $(window).width() < 1024) {
  		$('.column.filter').attr('data-click-state', 1);
		$('.column.filter').removeClass('closed');
		$('.column.filter').addClass('mobileopen');
		$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-01.svg');
	} else if(!window.location.hash && window.location == '/projects/' && $(window).width() > 1025) {
  		$('.column.filter').attr('data-click-state', 0);
		$('.column.filter').removeClass('mobileopen');
		$('.column.filter').addClass('closed');
		$('.menu-icon .icon.filter').attr('src','/assets/import/ICONS_DONE-05.svg');
	}

/***************************************** LAZY LOAD *****************************************/

window.lazySizesConfig = {
	addClasses: true,
	expand:1000000000000
};

/***************************************** TYPEFACE *****************************************/

$('.fontsize').on('change', function(){
    $(this).parents('.section.typeface').find('.typearea').css('fontSize', $(this).val() + 'px');
});

$('.case').on('change', function(){
	$(this).parents('.section.typeface').find('.typearea').removeClass('uppercase mixedcase lowercase');
	$(this).parents('.section.typeface').find('.typearea').addClass( $(this).val() );
});

$('.color').on('change', function(){
	$(this).parents('.section.typeface').removeClass('red grey black');
	$(this).parents('.section.typeface').addClass( $(this).val() );
});

$('.weight').on('change', function(){
	$(this).parents('.section.typeface').find( '.typearea' ).hide();
	$(this).parents('.section.typeface').find( '.typearea.' + $(this).val() ).show();
});

var words = ['SUPERPAPER','discussion','Return'];
var sentences = ['A.I. Inspiration: The Science Fiction That Frames Discussion','A Number, representing a number from 0 up to but not including 1','You dont need jQuery, just use javascripts Math.random function.'];


$('.sample').on('change', function(){
	if ($(this).val() == 'aabbcc') {
		$(this).parents('.section.typeface').find( '.typearea' ).text('Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0 1 2 3 4 5 6 7 8 9');
	} else if ($(this).val() == 'sentence') {
		var number = Math.floor((Math.random() * 2) + 1);
		$(this).parents('.section.typeface').find( '.typearea' ).text(sentences[number]);
	} else if ($(this).val() == 'word') {
		var number = Math.floor((Math.random() * 2) + 1);
		$(this).parents('.section.typeface').find( '.typearea' ).text(words[number]);
	}
});

$(function(){

	$('.section .typearea' ).hide();
	$('.section').each(function(){
		$('.typearea:first', this).show();
	});

});


/***************************************** OPEN IN NEW TAB *****************************************/

$("#press a[href^='http://']").attr("target","_blank");
$("#press a[href^='https://']").attr("target","_blank");


/***************************************** OVERVIEW THUMBS HOVER EFFECT *****************************************/

$('.float .project').on('mouseenter',function(){
	var height = $('.info', this).height() + 20;
	$('.image',this).css('transform', 'translateY(-'+ height +'px)');
}).on('mouseleave',function(){
	$('.image',this).css('transform', 'translateY(0px)');
});


/***************************************** FILTER *****************************************/


var $filterCheckboxes = $('input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

	var selectedFilters = {};
	var selected = new Array();

	$filterCheckboxes.filter(':checked').each(function() {
		
		selected.push(this.value);

		if (!selectedFilters.hasOwnProperty(this.name)) {
			selectedFilters[this.name] = [];
		}

		selectedFilters[this.name].push(this.value);
		
	});
	
	if(window.location.href == 'https://bureauborsche.com/projects/' || window.location.href == 'https://bureauborsche.com/projects'){
		window.history.pushState("String", "Title", 'https://bureauborsche.com/projects/filter:' + selected);
	} else {
		window.history.pushState("String", "Title", 'https://bureauborsche.com/projects/filter:' + selected);
	}

	var $filteredResults = $('.list table tbody tr, .thumbs .project');

	$.each(selectedFilters, function(name, filterValues) {

		$filteredResults = $filteredResults.filter(function() {

			var matched = false,
			currentFilterValues = $(this).data('category').split(' ');

			$.each(currentFilterValues, function(_, currentFilterValue) {
	
				if ($.inArray(currentFilterValue, filterValues) != -1) {
					matched = true;
					return false;
				}
			});
							
			return matched;

		});
	});

	$('.list table tbody tr, .thumbs .project').hide().filter($filteredResults).show();
	  
	if($('.filter input').is(':checked')){
		$('.reset').show();
		$('.mobile-filter').html('Apply Filter');
	} else {
		$('.reset').hide(); 
		$('.mobile-filter').html('Close');
		window.history.pushState("String", "Title", 'http://bureauborsche.com/projects');
	}

});

$('.filter .reset').on('click', function(){
	$filterCheckboxes.prop( "checked", false );
	$(this).hide();
	$('.list table tbody tr, .thumbs .project').show();
	$('.mobile-filter').html('Close');
	window.history.pushState("String", "Title", 'http://bureauborsche.com/projects');
});

var url = window.location.href;

if(url.indexOf("/projects/filter:") > -1){
	var pieces = url.split("/projects");
	pieces = pieces[1].split(":");
	pieces = pieces[1].split(",");
	console.log(pieces);
	
	for(i = 0;i < 5; i++){
		$('#'+pieces[i]).prop('checked', true);
	}
	
		$('.reset').show();
		$('.mobile-filter').html('Apply Filter');
	
	var selectedFilters = {};
	
	$('input[type="checkbox"]').filter(':checked').each(function() {
		
		if (!selectedFilters.hasOwnProperty(this.name)) {
			selectedFilters[this.name] = [];
		}

		selectedFilters[this.name].push(this.value);
		
	});
	
	var $filteredResults = $('.list table tbody tr, .thumbs .project');

	$.each(selectedFilters, function(name, filterValues) {

		$filteredResults = $filteredResults.filter(function() {

			var matched = false,
			currentFilterValues = $(this).data('category').split(' ');

			$.each(currentFilterValues, function(_, currentFilterValue) {
	
				if ($.inArray(currentFilterValue, filterValues) != -1) {
					matched = true;
					return false;
				}
			});
							
			return matched;

		});
	});

	$('.list table tbody tr, .thumbs .project').hide().filter($filteredResults).show();
}

/***************************************** ABOUT ACCORDION *****************************************/

$(document).ready(function(){

$('.year-title').on('click',function (){
	if($(this).parents('.year').attr('data-click-state') == 0){
		$(this).parents('.year').attr('data-click-state', 1);
		$(this).parents('.year').find('.year-content').slideDown(600);
	} else if($(this).parents('.year').attr('data-click-state') == 1){
		$(this).parents('.year').attr('data-click-state', 0);
		$(this).parents('.year').find('.year-content').slideUp(600);
	}
	
});

$('.imprint-title').on('click',function (){
	if($(this).parents('.imprint').attr('data-click-state') == 0){
		$(this).parents('.imprint').attr('data-click-state', 1);
		$(this).parents('.imprint').find('.imprint-content').slideDown(600);
	} else if($(this).parents('.imprint').attr('data-click-state') == 1){
		$(this).parents('.imprint').attr('data-click-state', 0);
		$(this).parents('.imprint').find('.imprint-content').slideUp(600);
	}
	
});

});


/***************************************** SLIDESHOW LOOKBOOK *****************************************

if($(window).width() < 767) {
	$("body.home").animate({ scrollTop: $(document).height() }, "slow");	
}

$(document).ready(function(){
	
	if($(window).width() > 1025) {
	
	var $carousel = $('.lookbook-slider').flickity({
						"cellSelector": ".lookbook-slide",
						"pageDots": false,
						"wrapAround": true,
						"prevNextButtons": false,
						"draggable": false,
						"lazyLoad": 5,
						"setGallerySize": false,
						"autoPlay": 5000,
						"pauseAutoPlayOnHover": true
					});
	
	} else {
	
	var $carousel = $('.lookbook-slider').flickity({
						"cellSelector": ".lookbook-slide",
						"pageDots": false,
						"wrapAround": true,
						"prevNextButtons": false,
						"draggable": true,
						"lazyLoad": 5,
						"setGallerySize": false,
						"autoPlay": 5000,
						"pauseAutoPlayOnHover": true
					});
	
	}

});

$('.lookbook-slide img,.lookbook-slide video').on('click', function(e){
	if (e.pageX < $(window).width()/3){
		$(this).parents('.lookbook-slider').flickity( 'previous' );
		$('.lookbook-slide video')[0].pause();
		$('.lookbook-slide.is-selected video')[0].play();
	} else if (e.pageX > ($(window).width()/3) && e.pageX < ($(window).width()/3*2)) {
		var url = $(this).find('.caption a').attr('href');
		window.location.href = '/projects';
	} else if (e.pageX > $(window).width()/3*2) {
		$(this).parents('.lookbook-slider').flickity( 'next' );
		$('.lookbook-slide video')[0].pause();
		$('.lookbook-slide.is-selected video')[0].play();
	}
});

$('.lookbook a').on('click', function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	window.location.href = url + '?b=slide';
});

if(document.location.search.length) {
    $('html, body').delay(500).animate({
          scrollTop: $('#intro').offset().top
    }, 1000);
} else {
    // no query string exists
}

$('.lookbook-slider').on('mousemove', function(e){
	
	if (e.pageX < $(window).width()/3){
		$(this).removeClass('next');
		$(this).addClass('prev');
	} else if (e.pageX > $(window).width()/3 && e.pageX < $(window).width()/3*2) {
		$(this).removeClass('next');
		$(this).removeClass('prev');
	} else if (e.pageX > $(window).width()/3*2) {
		$(this).removeClass('prev');
		$(this).addClass('next');
	}
	
});

/***************************************** FEED *****************************************/

if($('.feed-slider').length > 0){

var $feed = $('.feed-slider').flickity({
	"cellSelector": ".feed-slide",
	"pageDots": false,
	"wrapAround": true,
	"prevNextButtons": false,
	"draggable": true,
	"lazyLoad": 2,
	"pauseAutoPlayOnHover": false,
	"freeScroll": true
});

$feed.on('settle.flickity', function( event, index ) {
	$('.feedloader').hide();
	$feed.flickity('resize');	
});

}

/***************************************** SLIDESHOW FULLWIDTH SECTION *****************************************/
	
$(document).ready(function(){

	if($('.fullwidth-slider').length > 0){
	
		if($(window).width() > 1025) {
		
		var $carousel = $('.fullwidth-slider').flickity({
							"cellSelector": ".fullwidth-slide",
							"pageDots": false,
							"wrapAround": true,
							"prevNextButtons": false,
							"draggable": false,
							"lazyLoad": 3,
							"setGallerySize": false,
							"arrowShape": 'M33.9,49.5C56,44.6,74.2,25.1,74.2,2h-2.4c0,24.4-21.9,46.3-48.7,46.3v2.4c26.8,0,48.7,21.9,48.7,46.3h2.4 C74.2,73.9,56,54.4,33.9,49.5z',
							"autoPlay": false,
							"pauseAutoPlayOnHover": false
						});
		
		} else {
		
		var $carousel = $('.fullwidth-slider').flickity({
							"cellSelector": ".fullwidth-slide",
							"pageDots": false,
							"wrapAround": true,
							"prevNextButtons": false,
							"draggable": true,
							"lazyLoad": 3,
							"setGallerySize": false,
							"arrowShape": 'M33.9,49.5C56,44.6,74.2,25.1,74.2,2h-2.4c0,24.4-21.9,46.3-48.7,46.3v2.4c26.8,0,48.7,21.9,48.7,46.3h2.4 C74.2,73.9,56,54.4,33.9,49.5z',
							"autoPlay": false,
							"pauseAutoPlayOnHover": false
						});
		
		}

	}

});

$('.fullwidth-slider').on('click', function(e){
	if (e.pageX > $(window).width()/2){
		$(this).flickity( 'next' );
	} else {
		$(this).flickity( 'previous' );
	}
});

$('.fullwidth-slider').on('mousemove', function(e){

	if (e.pageX > $(window).width()/2){
		$(this).removeClass('prev');
		$(this).addClass('next');
	} else {
		$(this).removeClass('next');
		$(this).addClass('prev');
	}
	
});

	

/***************************************** SLIDESHOW SINGLE PROJECT *****************************************/

$(document).ready(function(){

$('.slideshow .project-content').each(function(){
	
	
	if($(window).width() > 1025) {
	
	var $carousel = $('.carousel',this).flickity({
						"cellSelector": ".carousel-cell",
						"pageDots": false,
						"wrapAround": true,
						"prevNextButtons": false,
						"draggable": false,
						"lazyLoad": 2
					});
	
	} else {
	
	var $carousel = $('.carousel',this).flickity({
						"cellSelector": ".carousel-cell",
						"pageDots": false,
						"wrapAround": true,
						"prevNextButtons": false,
						"draggable": true,
						"lazyLoad": 2
					});
	
	}				
					
	var $carouselStatus = $(this).find('.count');
	var flkty = $carousel.data('flickity');
	
	function updateStatus() {
	  var cellNumber = flkty.selectedIndex + 1;
	  $carouselStatus.text( cellNumber + '/' + flkty.slides.length );
	}
	updateStatus();
	$carousel.on( 'select.flickity', updateStatus );
	
	
	var flickity = $carousel.data('flickity');
	var $galleryNav = $carousel.parents('.slideshow').find('.carousel-thumbs');
	var $galleryNavItems = $galleryNav.find('.carousel-thumb');
	
	$carousel.on( 'select', function() {
    	$galleryNav.find('.is-selected').removeClass('is-selected');
    	$galleryNavItems.eq( flickity.selectedIndex ).addClass('is-selected');
  	});

	$galleryNav.on( 'click', '.carousel-thumb', function() {
		var index = $(this).index();
		$carousel.flickity( 'select', index );
		$carousel.parents('.slideshow').find('.carousel-overlay').attr('data-click-state', 0);
		$carousel.parents('.slideshow').find('.carousel-overlay').removeClass('open');
		$carousel.parents('.slideshow').find('.carousel').removeClass('blur');
	});
	
});

	
$('.carousel').on('click', function(e){
	if (e.pageX > $(window).width()/2){
		$(this).flickity( 'next' );
	} else {
		$(this).flickity( 'previous' );
	}
});

});

$('.carousel-cell').on('mousemove', function(e){
	
	if (e.pageX > $(window).width()/2){
		$(this).removeClass('prev');
		$(this).addClass('next');
	} else {
		$(this).removeClass('next');
		$(this).addClass('prev');
	}
	
});


/***************************************** SIDEBAR *****************************************/


$(document).ready(function() {
	$('.section').each(function eachElement() {

		var $this = $(this);

		var position = $(this).position();
		var halfwindow = $(this).height() / 2;

		$this.scrollspy({
			min: position.top,
			max: position.top + $(this).outerHeight(),
			onEnter: function onEnter(element) {
				$('#menu-'+element.id).addClass('active');
				$('#menu-'+element.id+ ' > div').slideDown(600);
			},
			onLeave: function onLeave(element) {
				$('#menu-'+element.id).removeClass('active');
				$('#menu-'+element.id+ ' > div').slideUp(600);
			}
		});
		
	});

});


/***************************************** SHOW HIDE TOPBAR *****************************************/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header, .header-hp').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
	
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
		    
    if (st > lastScrollTop && st > navbarHeight){
        $('.header, .header-hp').removeClass('nav-down').addClass('nav-up');
    } else if (st < 100){
        $('.header').removeClass('nav-up').addClass('nav-down');
	} 
    lastScrollTop = st;
}

$(window).bind('mousemove', function(e){
	if($(window).scrollTop() > 100){
		if(e.pageY - $(window).scrollTop() < 50){
			$('.header, .header-hp').removeClass('nav-up').addClass('nav-down');
		} else {
			$('.header, .header-hp').removeClass('nav-down').addClass('nav-up');
		}
	}
});

$(window).scroll(function(event){	
	if(($(window).scrollTop() + $(window).height()) > ($(document).height() - 100)){
		$('.header, .header-hp').css('top','0px');
	} else {
		$('.header, .header-hp').css('top','');
	}
});




/***************************************** SMOOTH SCROLL *****************************************/


$(function() {
  $('.side-menu > li > a[href*="#"]:not([href="#"]), .side-menu > li > span > a[href*="#"]:not([href="#"]), a.smooth').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top + 2
        }, 1000);
        return false;
      }
    }
  });
});


/***************************************** SIDE MENU CLICK *****************************************/

$('.side-menu > li > span > a').on('click',function (){
	if($(this).parents('li').attr('data-click-state') == 0){
		$('.side-menu li').attr('data-click-state', 0);
		$('.side-menu li div').slideUp(600);
		$(this).parents('li').attr('data-click-state', 1);
		$(this).parents('li').find('div').slideDown(600);
	} else if($(this).parents('li').attr('data-click-state') == 1){
		$('.side-menu li').attr('data-click-state', 0);
		$('.side-menu li div').slideUp(600);
	}
});

$('.side-menu > li > a').on('click',function (){
		$('.side-menu li').attr('data-click-state', 0);
		$('.side-menu li div').slideUp(600);
});


$('.single-project .tabs').each(function(){

	var $active, $content, $links = $(this).find('a');

	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.find('.section-thumb').addClass('active');

	$content = $($active[0].hash);

	$links.not($active).each(function () {
    	$(this.hash).hide();
  	});

	$(this).on('click', 'a', function(e){

		$(this.hash, '.section-thumbs').parents('.section-thumbs').find('.section-thumb').removeClass('active');
		$(this.hash).parents('.section').children('.project-content').hide();
		$('.side-menu .tabs a').removeClass('active');

		$active = $(this);
		$content = $(this.hash);
	
		$active.find('.section-thumb').addClass('active');
		$(this.hash).show();
		$content.find('.carousel').flickity('resize');
		$content.parents('.slideshow').find('.carousel-overlay').attr('data-click-state', 0);
		$content.parents('.slideshow').find('.carousel-overlay').removeClass('open');
		$content.parents('.slideshow').find('.carousel').removeClass('blur');
		$content.find('.carousel').flickity('resize');
		
		$('html,body').animate({
          scrollTop: $content.offset().top - 65
        }, 800);
	
		e.preventDefault();
  	});
});

$('.side-menu .tabs').each(function(){

	var $active, $content, $links = $(this).find('a');

	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);

	$content = $($active[0].hash);

	$links.not($active).each(function () {
    	$(this.hash).hide();
  	});

	$(this).on('click', 'a', function(e){
		
		$active.removeClass('active');
		$(this.hash).parents('.section').children('.project-content').hide();
				
		$active = $(this);
		$content = $(this.hash);
		
		$(this.hash, '.section').show();
		$(this.hash, '.section-thumbs').parents('.section-thumbs').find('.section-thumb').removeClass('active');
		$(this.hash, '.section-thumbs').find('.section-thumb').addClass('active');
		$content.find('.carousel').flickity('resize');
		
		$('html,body').animate({
          scrollTop: $content.offset().top - 65
        }, 800);
	
		e.preventDefault();
  	});
});



/***************************************** SINGLE PROJECT CREDITS OVERLAY *****************************************/


$('.icon-credits').on('click',function (){
	if($(this).parents('.caption').find('.overlay').attr('data-click-state') == 0){
		$(this).parents('.caption').find('.overlay').attr('data-click-state', 1);
		$(this).parents('.caption').find('.overlay').slideDown();
	} else if($(this).parents('.caption').find('.overlay').attr('data-click-state') == 1){
		$(this).parents('.caption').find('.overlay').attr('data-click-state', 0);
		$(this).parents('.caption').find('.overlay').slideUp();
	}
});

/***************************************** SINGLE PROJECT THUMB OVERLAY *****************************************/


$('.icon-thumbs').on('click',function (){
	if($(this).parents('.slideshow').find('.carousel-overlay').attr('data-click-state') == 0){
		$(this).parents('.slideshow').find('.carousel-overlay').attr('data-click-state', 1);
		$(this).parents('.slideshow').find('.carousel-overlay').addClass('open');
		$(this).parents('.slideshow').find('.carousel').addClass('blur');
	} else if($(this).parents('.slideshow').find('.carousel-overlay').attr('data-click-state') == 1){
		$(this).parents('.slideshow').find('.carousel-overlay').attr('data-click-state', 0);
		$(this).parents('.slideshow').find('.carousel-overlay').removeClass('open');
		$(this).parents('.slideshow').find('.carousel').removeClass('blur');
	}
});


/***************************************** SIDE MENU *****************************************/

$('.side-menu').width(($(window).width() - 960)/2 - 30);

$(window).on("load resize",function(){
	
	$('.side-menu').width(($(window).width() - 960)/2 - 30);

});	

/***************************************** CALC COLUMN *****************************************/

function columnwidth() {
	$('.column.thumbs').css('width', '1px');
	$('.column.thumbs').css('width', $('.content').outerWidth() - ($('.column.filter').outerWidth() + $('.column.list').outerWidth()));
}

columnwidth();

$(window).on('resize load', function(){
	columnwidth();
});

/***************************************** LIST HOVER IMAGE SIZE *****************************************/

$('.column tr').on('mouseenter', function(){
	
	$('.hover').css('width', '0px');
	$('.hover', this).css('width', $('.content').outerWidth() - ($('.column.filter').outerWidth() + $('.column.list').outerWidth()));
	$('.hover h1', this).css('width', $('.content').outerWidth() - ($('.column.filter').outerWidth() + $('.column.list').outerWidth()));
	$('.hover img', this).height($(window).height() - $('.hover .hover-sections', this).outerHeight() - 200);
	
}).on('mouseleave', function(){

	$('.hover', this).css('width', '0px');
	
});

/***************************************** OPEN/CLOSE COLUMN *****************************************/


$('.column-icon, .close').on('click',function(){
	if($(this).parents('.column').attr('data-click-state') == 1) {
		$(this).parents('.column').attr('data-click-state', 0);
		$(this).parents('.column').addClass('closed');
		$(this).parents('.column').removeClass('open');
		columnwidth();
		$('.search-bar').attr('data-click-state', 0);
		$('.search-bar').removeClass('open');
		$('.content img').removeClass('searchactive');
		$('.search-icon').text('Search');
	} else if($(this).parents('.column').attr('data-click-state') == 0) {
		$(this).parents('.column').attr('data-click-state', 1);
		$(this).parents('.column').removeClass('closed');
		$(this).parents('.column').addClass('open');
		columnwidth();
		$('.search-bar').attr('data-click-state', 0);
		$('.search-bar').removeClass('open');
		$('.content img').removeClass('searchactive');
		$('.search-icon').text('Search');
	}
});

/*
	
if($(window).width() > 1400){
		$('.column.filter').attr('data-click-state', 1);
		$('.column.filter').removeClass('closed');
		$('.column.filter').addClass('open');
}

if($(window).width() > 1200){
		$('.column.list').attr('data-click-state', 1);
		$('.column.list').removeClass('closed');
		$('.column.list').addClass('open');
}


/***************************************** TABS *****************************************/

$('.about .tabs').each(function(){

	var $active, $content, $links = $(this).find('a');

	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.addClass('active');

	$content = $($active[0].hash);

	$links.not($active).each(function () {
    	$(this.hash).hide();
  	});
			
	$(this).on('click', 'a', function(e){
				
		$active.removeClass('active');
		$content.hide();
	
		$active = $(this);
		$content = $(this.hash);
	
		$active.addClass('active');
		$content.show();
		
		$('.tabs').animate({scrollLeft: $(this).offset().left + $(this).parent().scrollLeft() - 9}, 500);
		
		e.preventDefault();
  	});
});

$('.single-project .type-tabs').each(function(){

	var $active, $content, $links = $(this).find('a');

	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.parents('.weight').addClass('active');

	$content = $($active[0].hash);

	$links.not($active).each(function () {
    	$(this.hash).hide();
  	});

	$(this).on('click', 'a', function(e){

		$active.parents('.weight').removeClass('active');
		$content.hide();
	
		$active = $(this);
		$content = $(this.hash);
	
		$active.parents('.weight').addClass('active');
		$content.show();
			
		e.preventDefault();
  	});
});

/***************************************** SEARCH *****************************************/

$('.search-icon, .search-icon-mobile, .search-header span').on('click', function(){
	
	if($('.search-bar').attr('data-click-state') == 0){
		$('.search-bar').attr('data-click-state', 1);
		$('.search-bar').addClass('open');
		$('.mobile-navigation').removeClass('open');
		$('.mobile-navigation').attr('data-click-state', 0);
		$('.content img').addClass('searchactive');
		$('.search-icon').text('Close');
		$('.menu-icon .icon.menu').attr('src','/assets/import/ICONS_DONE-02.svg');
		
	} else if($('.search-bar').attr('data-click-state') == 1){
		$('.search-bar').attr('data-click-state', 0);
		$('.search-bar').removeClass('open');
		$('.content img').removeClass('searchactive');
		$('.search-icon').text('Search');
		$('.menu-icon .icon.menu').attr('src','/assets/import/ICONS_DONE-02.svg');
	}
	
});

/***************************************** HOVER CUBE *****************************************/

$(".project, .section-thumb").on("mouseenter", function(){

	var that = $(this).find('.container');
	
  	$(that).css({
  		'-webkit-transform' : 'rotateY(-90deg) translateX(-50%) translateZ(' + that.outerWidth()/2 + 'px)',
  		'-moz-transform'    : 'rotateY(-90deg) translateX(-50%) translateZ(' + that.outerWidth()/2 + 'px)',
  		'-ms-transform'     : 'rotateY(-90deg) translateX(-50%) translateZ(' + that.outerWidth()/2 + 'px)',
  		'-o-transform'      : 'rotateY(-90deg) translateX(-50%) translateZ(' + that.outerWidth()/2 + 'px)',
  		'transform'         : 'rotateY(-90deg) translateX(-50%) translateZ(' + that.outerWidth()/2 + 'px)'
		});
		
}).on("mouseleave", function(){

	var that = $(this).find('.container');
	
  	$(that).css({
  		'-webkit-transform' : '',
  		'-moz-transform'    : '',
  		'-ms-transform'     : '',
  		'-o-transform'      : '',
  		'transform'         : ''
		});
		
});

/***************************************** HOVER LIST *****************************************/


$('.column.list tr').on('mouseenter',function(){
	var that = $(this);
	setTimeout(function(){
		that.addClass('hoveropen');
	},2000);
}).on('mouseleave',function(){
	$(this).removeClass('hoveropen');
});



