$(document).scroll(function(e) {
    $('.sidebar').css({
        'left': 240 - $(document).scrollLeft()
    });
});