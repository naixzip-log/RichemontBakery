//popup
$(document).ready(function(){
    function setCookie(name,value,expiredays){
        var today = new Date();
        today.setDate(today.getDate() + expiredays);
        document.cookie = name + '=' + value + '; path=/; expires' + today.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var closeBtn = '.close_btn';
    var todayBtn = '.today_btn';

    $(closeBtn).click(function(){
        $(popup).stop().fadeOut(0);
        $('body').css('overflow','visible');
    });

    $(todayBtn).click(function(){
        setCookie('exCookie','yes',1); 
        $(popup).stop().fadeOut(0);
        $('body').css('overflow','visible');
    });

    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=yes') < 0){
        $(popup).stop().fadeIn(0);
        $('body').css('overflow','hidden');
    }else{
        $(popup).stop().fadeOut(0);
        $('body').css('overflow','visible');
    }
});

// main
$(document).ready(function(){
    var swiper = new Swiper("main .swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "main .swiper-pagination",
        },
        loop: true,
        speed: 600,
    });
});

// thismonth
$(document).ready(function(){
    var swiper = new Swiper(".thismonth .swiper", {
        effect: "flip",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".thismonth .swiper-button-next",
            prevEl: ".thismonth .swiper-button-prev",
        },
    });
});

// since1976
$(document).ready(function(){
    var swiper = new Swiper(".since1976 .swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 600,
    });
});

// news
$(document).ready(function(){
    var swiper = new Swiper(".news .swiper", {
        direction: "vertical",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});

// sns
$(function(){
    var swiper = new Swiper(".swiper1", {
        spaceBetween: 16,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".swiper2", {
        spaceBetween: 10,
        effect: 'fade',
        thumbs: {
            swiper: swiper,
        },
    });
});


// online
$(function(){
    var swiper = new Swiper(".online .swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        speed: 7000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
    });
});