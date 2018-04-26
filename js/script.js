$(document).ready(function(){
    $('.space').mouseover(function() {
      var roomId = $(this).attr('id');
      $('.space-info').show();
      $('.space-info').append(roomId);
    });

    $('.space').mouseout(function() {
      $(this).attr('id')
      $('.space-info').empty();
    });
});
