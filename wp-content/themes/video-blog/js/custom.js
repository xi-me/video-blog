jQuery(function($){
	window.video_blog_currentfocus=null;
  	video_blog_checkfocusdElement();
	var video_blog_body = document.querySelector('body');
	video_blog_body.addEventListener('keyup', video_blog_check_tab_press);
	var video_blog_gotoHome = false;
	var video_blog_gotoClose = false;
	window.responsiveMenu=false;
 	function video_blog_checkfocusdElement(){
	 	if(window.video_blog_currentfocus=document.activeElement.className){
		 	window.video_blog_currentfocus=document.activeElement.className;
	 	}
 	}
 	function video_blog_check_tab_press(e) {
		"use strict";
		// pick passed event or global event object if passed one is empty
		e = e || event;
		var activeElement;

		if(window.innerWidth < 999){
		if (e.keyCode == 9) {
			if(window.responsiveMenu){
			if (!e.shiftKey) {
				if(video_blog_gotoHome) {
					jQuery( ".main-menu ul:first li:first a:first-child" ).focus();
				}
			}
			if (jQuery("a.closebtn.mobile-menu").is(":focus")) {
				video_blog_gotoHome = true;
			} else {
				video_blog_gotoHome = false;
			}

		}else{

			if(window.video_blog_currentfocus=="mobiletoggle"){
				jQuery( "" ).focus();
			}}}
		}
		if (e.shiftKey && e.keyCode == 9) {
		if(window.innerWidth < 999){
			if(window.video_blog_currentfocus=="header-search"){
				jQuery(".mobiletoggle").focus();
			}else{
				if(window.responsiveMenu){
				if(video_blog_gotoClose){
					jQuery("a.closebtn.mobile-menu").focus();
				}
				if (jQuery( ".main-menu ul:first li:first a:first-child" ).is(":focus")) {
					video_blog_gotoClose = true;
				} else {
					video_blog_gotoClose = false;
				}

				if (e.target.parentNode.previousElementSibling.childElementCount == 2) {
					if(e.target.parentNode.previousElementSibling.children[1].className === "sub-menu"){
						e.target.parentNode.previousElementSibling.children[1].style.display = "block";
					}
				}
			
			}else{

			if(window.responsiveMenu){
			}}}}
		}
	 	video_blog_checkfocusdElement();
	}
});

jQuery(function($){
	var navmenus = navmenus || {};

	navmenus.primaryMenu = {

		init: function() {
			this.focusMenuWithChildren();
		},
		// The focusMenuWithChildren() function implements Keyboard Navigation in the Primary Menu
		// by adding the '.focus' class to all 'li.menu-item-has-children' when the focus is on the 'a' element.
		focusMenuWithChildren: function() {
			// Get all the link elements within the primary menu.
			var links, i, len,
				menu = document.querySelector( '.main-navigation' );

			if ( ! menu ) {
				return false;
			}
			links = menu.getElementsByTagName( 'a' );

			// Each time a menu link is focused or blurred, toggle focus.
			for ( i = 0, len = links.length; i < len; i++ ) {
				links[i].addEventListener( 'focus', video_blog_toggleFocus, true );
				links[i].addEventListener( 'blur', video_blog_toggleFocus, true );
			}

			//Sets or removes the .focus class on an element.
			function video_blog_toggleFocus() {
				var self = this;

				// Move up through the ancestors of the current link until we hit .primary-menu.
				while ( -1 === self.className.indexOf( 'mobile_nav' ) ) {
					// On li elements toggle the class .focus.
					if ( 'li' === self.tagName.toLowerCase() ) {
						if ( -1 !== self.className.indexOf( 'focus' ) ) {
							self.className = self.className.replace( ' focus', '' );
						} else {
							self.className += ' focus';
						}
					}
					self = self.parentElement;
				}
			}
		}
	}; 

	function video_blog_navigationmenuReady( fn ) {
		if ( typeof fn !== 'function' ) {
			return;
		}
		if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
			return fn();
		}
		document.addEventListener( 'DOMContentLoaded', fn, false );
	}
	video_blog_navigationmenuReady( function() {
		navmenus.primaryMenu.init();	// Primary Menu
	} );
});

jQuery(document).ready(function() {
	var owl = jQuery('#video_categry .owl-carousel');
		owl.owlCarousel({
			margin: 0,
			nav: true,
			autoplay:false,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			dots:false, 
			loop: true,
			navText : ['<i class="fa fa-lg fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
			  0: {
			    items: 1
			  },
			  600: {
			    items: 3
			  },
			  1000: {
			    items: 4
			}
		}
	})
})