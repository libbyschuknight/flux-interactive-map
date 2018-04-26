$(document).ready(function(){
    // $(".room").hover(function(){
    //     $(this).css("fill", "yellow");
    //     }, function(){
    //     $(this).css("fill", "pink");
    // });



    $(".room").mouseover(function() {
      console.log($(this));
        $(".room-info").show();
        $(".room-info").append("this text i!!");
    });

    $(".room").mouseout(function() {
      console.log($(this));
      $(".room-info").empty();
      // $(".room-info").hide();
    });

});
