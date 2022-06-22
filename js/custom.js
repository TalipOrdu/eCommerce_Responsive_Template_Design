
jQuery(document).ready(function($){


    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu_item");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".menuIcon");
    const menuIcon = document.querySelector(".closeICon");

    var productImg = document.getElementById('ProductImg');
    var smallImg = document.getElementsByClassName('small-img');


    //change of product images
    $(document).ready(function(){
        $(smallImg[0]).click(function(){
            productImg.src = smallImg[0].src;
        })
        $(smallImg[1]).click(function(){
            productImg.src = smallImg[1].src;
        })
        $(smallImg[2]).click(function(){
            productImg.src = smallImg[2].src;
        })
        $(smallImg[3]).click(function(){
            productImg.src = smallImg[3].src;
        })
    })


    // smallImg[0].onclick = () =>{
    // productImg.src = smallImg[0].src;
    // }
    // smallImg[1].onclick = () =>{
    // productImg.src = smallImg[1].src;
    // }
    // smallImg[2].onclick = () =>{
    // productImg.src = smallImg[2].src;
    // }
    // smallImg[3].onclick = () =>{
    // productImg.src = smallImg[3].src;
    // }


    // smallImg[0].onclick = () => {
    //     productImg.src = smallImg[0].src;
    // }
    // smallImg[1].onclick = function(){
    //     productImg.src = smallImg[1].src;
    // }
    // smallImg[2].onclick = function(){
    //     productImg.src = smallImg[2].src;
    // }
    // smallImg[3].onclick = function(){
    //     productImg.src = smallImg[3].src;
    // }


    initFavorite();
    initIsotopeFiltering();
    initTimer();
    initSlider();

    function toggleMenu(){
        if(menu.classList.contains("showMenu")){
            menu.classList.remove("showMenu");
            
        } else{
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        }
    }

    hamburger.addEventListener("click",toggleMenu);

    menuItems.forEach(
        function(menu_item){
            menu_item.addEventListener("click",toggleMenu);
        }
    )

    // 3.  Init Timer

    function initTimer(){

        if($('.timer').length){

            var target_date = new Date("Jun 24, 2022").getTime();

            var date = new Date();
            date.setDate(date.getDate() + 3);
            // var target_date = date.getTime();

            var days,hours,minutes,seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function(){

                //find the amount of seconds between now and target
                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) /1000;

                //do some time calculations
                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;
                
                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                //display results
                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);

            }, 1000);

        }
    }

    // 4.  Init Favorite

    function initFavorite(){
        if($('.favorite').length){
            var favs = $('.favorite');

            favs.each(function(){
                var fav = $(this);
                var active = false;

                if(fav.hasClass('active')){
                    active=true;
                }
                fav.on('click',function(){

                    if(active){
                        fav.removeClass('active');
                        active=false;
                    }
                    else{
                        fav.addClass('active');
                        active = true;
                    }
                })
            });
        }
    }

    // 5.  Init Isotope Filtering

    function initIsotopeFiltering(){

        if($('.grid_sorting_button').length){

            $('.grid_sorting_button').click(function(){
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.product-grid').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        }
    }

    // 6.  Init Slider    

    function initSlider(){
        
        if($('.product_slider').length){
            var slider1 = $('.product_slider');
            
            slider1.owlCarousel({
                dots:false,
                nav:false,
                autoplay:true,
                responsive:
                {
                    0:{items:1},
                    480:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1280:{items:5},
                    1440:{items:6},
                }
            });

            $('.product_slider_nav_left').click(function(){
                slider1.trigger('prev.owl.carousel');
            })

            $('.product_slider_nav_right').click(function(){
                slider1.trigger('next.owl.carousel')
            })
        
            
        }
    }

});

