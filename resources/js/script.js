$(document).ready(function () {
    console.log($('.sub-header'));

    $('.features').waypoint(
        function (direction) {
            if (direction === 'down') {
                $('.sub-header').addClass('sticky');
            } else {
                $('.sub-header').removeClass('sticky');
            }
        },
        { offset: '75px' }
    );

    // document.body.scrollTop = 1000;

    let scrollPage = function (elTopPos) {
        console.log(elTopPos);
        window.scrollTo({
            top: elTopPos - 75,
            behavior: 'smooth',
        });
    };

    Array.from($('a[href^="#"]')).forEach((element) => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            linkHref = element.getAttribute('href');

            console.log(linkHref);

            if (linkHref.length > 1) {
                const targetElement = document.querySelector(linkHref);

                scrollPage(targetElement.offsetTop);
            }
        });
    });

    function animateScrollElement(element, typeAnimation) {
        element.addClass('animate__animated');
        if (typeAnimation) {
            element.addClass('animate__' + typeAnimation);
        }
    }

    // ANIMATIONS

    $('.js--wp-1').waypoint(
        function () {
            animateScrollElement($('.js--wp-1'), 'fadeIn');
        },
        { offset: '80%' }
    );

    $('.js--wp-2').waypoint(
        function () {
            animateScrollElement($('.js--wp-2'), 'fadeInUp');
        },
        { offset: '80%' }
    );

    $('.js--wp-3').waypoint(
        function () {
            animateScrollElement($('.js--wp-3'), 'fadeIn');
        },
        { offset: '80%' }
    );

    $('.js--wp-4').waypoint(
        function () {
            animateScrollElement($('.js--wp-4'), 'pulse');
        },
        { offset: '80%' }
    );

    // MOBILE-NAVIGATION

    const iconMenu = $('.btn-mobile-nav i');

    $('.btn-mobile-nav').click(function () {
        // $('.sub-header').slideToggle('activated-mobile-menu');
        $('.sub-header').toggleClass('activated-mobile-menu');



        if (iconMenu.hasClass('ion-navicon-round')) {
            iconMenu.removeClass('ion-navicon-round');
            iconMenu.addClass('ion-close-round');
        } else {
            iconMenu.removeClass('ion-close-round');
            iconMenu.addClass('ion-navicon-round');
        }
    });

    $('.main-nav ul').click(function () {
        $('.sub-header').removeClass('activated-mobile-menu');
        iconMenu.removeClass('ion-close-round');
        iconMenu.addClass('ion-navicon-round');
    });
});
