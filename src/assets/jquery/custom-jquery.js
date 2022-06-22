jQuery(document).ready(function ($) {
    const mainMenu = $('#js-main-menu');
    let closeMenu = function () {
        $('#js-sandwitch-wrap').on('click', function () {
            if (mainMenu.hasClass('fixed')) {
                mainMenu.removeClass('fixed');
                $('body').css({
                    overflow: '',
                    paddingRight: 'initial'
                });
            } else {
                $('body').css({
                    overflow: 'hidden',
                    paddingRight: '12px'
                });
                mainMenu.addClass('fixed');
            }
            $(this).toggleClass('sandwitch--active');
            $(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
        });
    };
    closeMenu();

    function home_slider() {
        const slider = $('#home-slider');
        const slider_wrap = slider.find('.home-slider__wrap');
        slider_wrap.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true
        });
    }

    if (document.querySelector('#home-slider')) {
        home_slider();
    }
});
