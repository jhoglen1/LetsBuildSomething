$("#buttons").on("click", function( e ) {
    
    e.preventDefault();

    $("body").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});