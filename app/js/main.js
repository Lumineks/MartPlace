$(function () {
    $('.weekly-products__slider').slick({
        prevArrow: '<button class="slick-arrow slick-arrow--prev lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next lnr-chevron-right"></button>',
        infinite: true,
        autoplay: 3000,
        appendArrows: '.weekly-products__arrows',

    });
    $('.followers__inner').slick({
        prevArrow: '<button class="slick-arrow slick-arrow--prev lnr-chevron-left"><</button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next lnr-chevron-right"></button>',
        infinite: true,
        autoplay: 3000,
        appendArrows: '.followers__arrows',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    });
    $('.feedback__inner').slick({
        prevArrow: '<button class="slick-arrow slick-arrow--prev lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next lnr-chevron-right"></button>',
        infinite: true,
        autoplay: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
    });


    $('.greeting__list').on('click', function () {
        $('.greeting__list').toggleClass('active')
    });

    $(".stars").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true,
        ratedFill: "#ffc000"
    });

    if ($(window).width() < 768) {
        $('.header__user').addClass('phone');
    }

    $('.header__user').click(function () {
        return false;
    });
    $('.header__icon--cart').click(function () {
        return false;
    });

    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('active');
        $('.header__list').toggleClass('active');
    });

    var mixer = mixitup('.newest-products__items');
});