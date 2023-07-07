//panel

$(document).ready(function(){
    var panel = '.panel';
    var bg = '.black_bg';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var btn = '.panel_btn';
    var speed = 300;

    $(btn).click(function(){
        var has = $(this).hasClass('active');

        if(has){ 
            setTimeout(function(){
                $(main).removeClass('active');
                $(sub).stop().slideUp(0);
            },600);
        }

        $(this).add(panel).toggleClass('active');
        $(bg).stop().fadeToggle(speed);
    });

    $(bg).click(function(){
        $(panel).removeClass('active');
        $(this).stop().fadeOut(speed);
        $('body').removeClass('active');

        setTimeout(function(){
            $(sub).stop().slideUp('active');
            $(main).removeClass('active');
        },600);
    })

    $(main).click(function(){
        $(sub).stop().slideUp(speed);
        $(this).next().stop().slideToggle(speed);
        var has = $(this).hasClass('active');

        if(has){
            $(this).removeClass('active');
        }else{
            $(main).removeClass('active');
            $(this).addClass('active');
        }
    });
});