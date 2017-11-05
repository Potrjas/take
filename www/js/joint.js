$(document).ready(function() {
    $(window).scroll(function(){
        if ($('html, body').scrollTop() <= 500) {
            $('#up').hide();
        }
        else {
            $('#up').show();
        }
    });
    $('#up').click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});