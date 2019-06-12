$("a1,a2,a3").click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');   
    $('html, body').animate({ scrollTop : $(target).offset().top + "px"});
    console.log(target);


});