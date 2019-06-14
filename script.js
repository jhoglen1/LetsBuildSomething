$( ".about" ).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#About').offset().top
    }, 1000);
}); 

$( ".projects" ).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#Projects').offset().top
    }, 1000);
}); 

$( ".contact" ).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#Contact').offset().top
    }, 1000);
}); 
