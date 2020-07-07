$(function() {
    $('.weekly-products__slider').slick({
        prevArrow: '<button class="slick-prev slick-arrow"><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>',
        infinite: true,
        autoplay: 3000,
    });
});