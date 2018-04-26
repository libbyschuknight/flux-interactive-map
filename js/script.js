$(document).ready(function(){
    $(".room").mouseover(function() {
      console.log($(this));
        $(".room-info").show();
        $(".room-info").append("this text i!!");
    });

    $(".room").mouseout(function() {
      console.log($(this));
      $(".room-info").empty();
    });
});
