$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 25) {
            $(".tab_container > a").css('transition', '1s');
            $(".tab_container > a").css('border-left-color', 'black');
            $(".tab_container > a").css('border-right-color', 'black');
            $(".tab_container > a").css('border-bottom-color', 'black');
            $(".tabbackground").css('transition', '1s');
            $(".tabbackground").css('background-color', 'black');

            $('.tab_container > a').hover(function(){
                $(this).css('border-bottom-color', 'white');
                $(this).css('border-left-color', 'white');
                $(this).css('border-right-color', 'white');
                $(this).css('color', 'black');
            }, function() {
                $(this).css('border-bottom-color', 'black');
                $(this).css('border-left-color', 'black');
                $(this).css('border-right-color', 'black');
                $(this).css('color', 'white');
            });
        } else {
            $(".tab_container > a").css('transition', '1s');
            $(".tab_container > a").css('border-left-color', 'transparent');
            $(".tab_container > a").css('border-right-color', 'transparent');
            $(".tab_container > a").css('border-bottom-color', '#363636');
            $(".tabbackground").css('transition', '1s');
            $(".tabbackground").css('background-color', '#27261F');

            $('.tab_container > a').hover(function(){
                $(this).removeAttr('style');
            }, function() {
                $(this).removeAttr('style');
            });
        }
    });
    
});