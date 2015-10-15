$( document ).ready(function() {
    console.log( "ready!" );
    $( function() {
      $('.fa-thumb-tack').click( function(event) {
        event.preventDefault();
        $(this).toggleClass("yellowTack");
      });
    });
    $( function() {
      $('.fa-heart').click( function(event) {
        event.preventDefault();
        $(this).toggleClass("redHeart");
      });
    });
});
