/*!
 * inspideez
 * dropdown
 */

$(function () {
    $('.dropdown-menu').hide;
    $('.dropdown-toggle').on("click", function (event){
        event.stopPropagation();
        $(this).parent('.dropdown').toggleClass('open');
        if($(this).parent('.dropdown').hasClass('open')){
            $(this).parent('.dropdown').removeClass('closing');
        }else{
            $(this).parent('.dropdown').addClass('closing');
            setTimeout(function(){
                $('.dropdown').removeClass('closing');
            },150);
        }
        
    });
    $('html,body').on("click", function () {
            if($('.dropdown').hasClass('open')){
                $('.dropdown').addClass('closing');
            }
            $('.dropdown').removeClass('open');
            setTimeout(function(){
                $('.dropdown').removeClass('closing');
            },150);
    });
});