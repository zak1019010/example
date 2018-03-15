$( document ).ready(function() {
    $('#discover').click(function(){
        $('.banner').fadeOut();
        $('.about').css('background-color', '#D9D6DC');
        $('#about-btn').css('display', 'block');
    }); 
    $('#about').click(function(){
        $('#project-btn').css('display', 'block');
    });
});