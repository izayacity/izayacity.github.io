jQuery(document).ready(function($){
	//using bxslider in main slider
    
        $('.testimonial-slider').bxSlider({
            //adaptiveHeight: true,
            pager: false,
            controls: false,
            mode: 'fade',
            auto : true
        });
    
    // Wow js
    new WOW().init();

    // scroll on menu click
    smoothScroll.init();

    

    //Search Box Toogle
    $('.ed-search-wrap .search-icon .fa-search').click(function(){
      $('.ed-search-wrap').addClass('show');
    });
    $('.ed-search-wrap .ed-search .search-close').on('click', function(){
      $('.ed-search-wrap').removeClass('show');
    });

    //go to top 
    if ($('#go-to-top').length) {
        var scrollTrigger = 100, // px
        goToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#go-to-top').addClass('show');
            } else {
                $('#go-to-top').removeClass('show');
            }
        };
        goToTop();
        $(window).on('scroll', function () {
            goToTop();
        });
        $('#go-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


    //isotope data filter
        var $grid = $('.ed-sortable-grid').isotope({
            itemSelector: '.element-item',
            resize: false,
        });
           

        // bind filter button click
        $('.filters-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

    //menu active
    $('.nav.plx_nav').each(function(){
        $(this).find('li:first').addClass('active');
    });
    
    // smooth scroll with active menu class in header
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            //$('nav').addClass('fixed');
            $('.site-content section').each(function(i) {
                if ($(this).position().top <= windscroll + 40) {
                    $('li.eight_sec_menu').removeClass('active');
                    $('li.eight_sec_menu').eq(i).addClass('active');
                }
            });

        } else {

            //$('nav').removeClass('fixed');
            $('li.eight_sec_menu>a').removeClass('active');
            $('li.eight_sec_menu>a').addClass('active');
        }

    }).scroll();


    //sticky menu
    var topPos = $('#content').position();
    $(window).scroll(function(){
        if($(window).scrollTop() > topPos.top){
            $('#masthead').addClass('fixed');
        }else{
            $('#masthead').removeClass('fixed');
        }
    }).scroll();

    $('.toggle-btn').click(function(){
        $('.main-navigation').toggleClass('toggled');
    });

    $('body').on('click','.main-navigation.toggled > ul > li',function(){
       $('.main-navigation').toggleClass('toggled'); 
    });

    // to make image load properly
    $('.portfolio-wrap .button-group > li.is-checked').click();
});