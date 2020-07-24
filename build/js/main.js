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
        responsive: [{
                breakpoint: 1151,

                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 630,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.feedback__inner').slick({
        prevArrow: '<button class="slick-arrow slick-arrow--prev lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next lnr-chevron-right"></button>',
        infinite: true,
        autoplay: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
                breakpoint: 1301,

                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            
        ]
    });


    $('.greeting__list, .category__list').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.category__btn--grid').on('click', function () {
        $('.category__btn--list').removeClass('active');
        $('.category__btn--grid').addClass('active');
        $('.category__card').removeClass('category__card--list');
        $('.category__card-info--list').removeClass('active');
        $('.category__card-info').removeClass('disabled');
        $('.category__products').removeClass('category__products--list');
    });

    $('.category__btn--list').on('click', function () {
        $('.category__btn--grid').removeClass('active');
        $('.category__btn--list').addClass('active');
        $('.category__card').addClass('category__card--list');
        $('.category__card-info--list').addClass('active');
        $('.category__card-info').addClass('disabled');
        $('.category__products').addClass('category__products--list');
    });

    $('.category__btn--popular').on('click', function () {
        $('.category__btn--new').removeClass('active');
        $('.category__btn--popular').addClass('active');
    });
    $('.category__btn--new').on('click', function () {
        $('.category__btn--popular').removeClass('active');
        $('.category__btn--new').addClass('active');
    });

    $('.category__item-title--categories').on('click', function () {
        $('.category__aside-list--categories').slideToggle('slow');
    });

    $('.category__item-title--filter').on('click', function () {
        $('.category__aside-list--filter').slideToggle('slow');
    });

    $('.category__item-title--price').on('click', function () {
        $('.category__form').slideToggle('slow');
    });

    $(".stars").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true,
        ratedFill: "#ffc000"
    });
    $(".category__card-stars").rateYo({
        rating: 4.5,
        starWidth: "16px",
        readOnly: true,
        ratedFill: "#ffc000"
    });

    if ($(window).width() < 768) {
        $('.header__link').addClass('phone');
    }

    $('.header__link.phone, .breadcrumbs__link--current--disabled').click(function () {
        return false;
    });

    $('.disabled').click(function () {
        return false;
    });
    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('active');
        $('.header__list').toggleClass('active');
    });

    $('.js-range-slider').ionRangeSlider({

        type: "double",
        grid: false,
        min: 0,
        max: 320,
        from: 30,
        to: 300,
        prefix: "$"
    });


    if ($('.newest-products__items').length) {
        var mixer = mixitup('.newest-products__items');
    }

});