jQuery(document).ready(()=>{

	jQuery(".js-nav-button").click(function(){

		jQuery(this).toggleClass("header__nav-button_active");
		jQuery(".js-nav").css("top", jQuery(".header").outerHeight()).slideToggle(200);


	});

	jQuery(document).mouseup(function (e) {
		let container = jQuery(".js-nav, .js-nav-button");
		if(window.innerWidth < 1024){

			if (container.has(e.target).length === 0 && !jQuery(e.target).hasClass("js-nav-button")){
				jQuery(".js-nav-button").removeClass("header__nav-button_active");
				jQuery(".js-nav").slideUp(200);
			}
		}

	});



	let isNavHide = false;
	let navHidePosition;
	let pevScrollPosition = jQuery(window).scrollTop();

	jQuery(window).scroll(function(){
		let scroll = jQuery(window).scrollTop();
		let navPosition = jQuery(".js-nav").offset().top;


		if(navPosition - scroll === 0 && !isNavHide){
			navHidePosition = scroll + 200;
			isNavHide = true;
		}


		if(pevScrollPosition > scroll){
			jQuery(".js-nav").removeClass("main-nav_hidden");
			isNavHide = false;
		}else{
			if(scroll >= navHidePosition){
				jQuery(".js-nav").addClass("main-nav_hidden");
			}
		}

		pevScrollPosition = scroll;

	});



	jQuery(".main-nav__item > a").click(function(e){

		let sublist = jQuery(this).next();
		if(sublist.length > 0 && window.innerWidth < 1024){
			e.preventDefault();
			sublist.slideToggle(200);
			jQuery(this).parent().toggleClass("main-nav__item_active");
		}

	});

});