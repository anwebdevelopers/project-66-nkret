$(function() {

    'use strict';


    /*******************************************************/
    //SHOW MORE
    /*******************************************************/
    $('.showmore').each(function() {
        $(this).children().not(':first').hide();
        $(this).after('<div class="showmore-button"><button type="button">подробнее</button></div>');
        $('.showmore-button').on('click', 'button', function() {
            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active').text('подробнее').closest('.showmore-button').prev('.showmore').children().not(':first').slideUp(200);
            } else {
                $(this).addClass('active').text('свернуть').closest('.showmore-button').prev('.showmore').children().not(':first').slideDown(200);
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

});
