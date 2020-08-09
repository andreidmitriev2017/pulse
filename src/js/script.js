$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 120,
        prevArrow:'<button type="button" class="carousel__arrow carousel__arrow_prev"><img src="icons/prev.png"></button>',
        nextArrow:'<button type="button" class="carousel__arrow carousel__arrow_next"><img src="icons/next.png"></button>',
        responsive:[
        {
            breakpoint: 768,
            settings:{
                arrows: false
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
        
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay,#consultation,#thanks,#order').fadeOut('slow');
    });
    $('.button_mini').each(function(i){
        $(this).on('click',function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay,#order').fadeIn('slow');
        });
    });
});
