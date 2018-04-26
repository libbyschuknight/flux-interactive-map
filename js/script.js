$(document).ready(function(){
    $(".room").hover(function(){
        $(this).css("fill", "yellow");
        }, function(){
        $(this).css("fill", "pink");
    });

    $(".room").hover(function() {
        $( this ).append( $( "<span> ***</span>" ) );
      }, function() {
        $( this ).find( "span:last" ).remove();
    });

});
