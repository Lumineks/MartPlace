$(function() {
    $('.weekly-products__slider').slick({
        prevArrow: '<button class="slick-arrow slick-arrow--prev"><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
        infinite: true,
        autoplay: 3000,
        appendArrows: '.slider-head__arrows',
    });

    var mixer = mixitup('.newest-products__items');

    $('.greeting__list').on('click', function() {
        $('.greeting__list').toggleClass('active')
    });

    $(".stars").rateYo({
        rating: 4.5,
        starWidth: "16px",
        readOnly: true,
        ratedFill: "#ffc000"
    });
});