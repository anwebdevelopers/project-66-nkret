$(function() {

    'use strict';

    /*******************************************************/
    //MENU MOBILE
    /*******************************************************/
    var $menu = $('.header__menu, .aside__nav'),
        $buttonMenuMobile = $('.button-menu-mobile');
    $buttonMenuMobile.click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $menu.slideToggle(200);
    });
    $(window).resize(function() {
       $buttonMenuMobile.removeClass('active');
       $menu.removeAttr('style');
   });

   /*******************************************************/
   //MENU MOBILE
   /*******************************************************/
   var $search = $('.aside__search'),
       $buttonSearchMobile = $('.button-search-mobile');
   $buttonSearchMobile.click(function() {
       $(this).toggleClass('active');
       $search.slideToggle(200);
   });
   $(window).resize(function() {
      $buttonSearchMobile.removeClass('active');
      $search.removeAttr('style');
   });



    /*******************************************************/
    //SHOW MORE
    /*******************************************************/
    $('.showmore').each(function() {
        $(this).children().not(':first').hide();
        $(this).after('<div class="showmore-button"><button type="button">подробнее</button></div>');
        $('.showmore-button').on('click', 'button', function() {
            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active').text('развернуть').closest('.showmore-button').prev('.showmore').removeClass('active').children().not(':first').slideUp(200);
            } else {
                $(this).addClass('active').text('свернуть').closest('.showmore-button').prev('.showmore').addClass('active').children().not(':first').slideDown(200);
            }
        });
    });

    /*******************************************************/
    //ACCORDION
    /*******************************************************/
     $('.accordion').each(function() {
        var $this = $(this);
        if ( $this.children('.accordion__box').length ) {
            $this.prepend('<button type="button" class="accordion__button"></button>');
        }
        ($this.hasClass('current') || $this.find('.current').length) ? $this.addClass('active') : $this.children('.accordion__box').hide();
    }).on('click', '.accordion__button', function(e) {
        e.stopPropagation();
        var $this = $(this);
        $this.closest('.accordion').hasClass('active') ? $this.closest('.accordion').removeClass('active').children('.accordion__box').slideUp(200) : $this.closest('.accordion').addClass('active').children('.accordion__box').slideDown(200).end().siblings().removeClass('active').children('.accordion__box').slideUp(200);
    });

    /*******************************************************/
    //ABOUT SLIDER
    /*******************************************************/
    $('.slider__box').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        navContainer: '.slider__nav'
    });

    /*******************************************************/
   //POPUP
   /*******************************************************/

   $('.popup-with-move-anim').magnificPopup({
       type: 'inline',
       fixedContentPos: false,
       fixedBgPos: true,
       overflowY: 'auto',
       closeBtnInside: true,
       preloader: false,
       midClick: true,
       removalDelay: 300,
       mainClass: 'my-mfp-slide-bottom'
   });

   /*******************************************************/
   //GALLERY POPUP
   /*******************************************************/

    $('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

});
