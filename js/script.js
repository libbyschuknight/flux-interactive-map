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


var descriptions = {
    "04-red-dwarf": "Red Dwarf is one of the spaceships featured in the British comedy Red Dwarf",
    "05-betty": "The Betty was an aging transport ship captained by Frank Elgyn seen in the Alien and Alien:Resurrection Movie",
    "06-nostromo": "In the first Alien movie Nostromo was the craft selected to bring back a Xenomorph specimen from the moon",
    "07-nebuchadnezzar": "The Nebuchadnezzar nicknamed the Neb, is the main hovercraft featured in the Matrix and Matrix Reloaded",
    "08-endeavour": "The solar survey vessel Endeavour was sent to 'Rendezvous with Rama' in the sci fi British novel written by Arthur C. Clarke",
    "09-lewis-clark": "The Lewis & CLark was the rescue vessel sent to look for survivors in the film Event Horizon",
    "pegasus": "Pegasus was the human battleship-carrier hybrid from Battlestar Galactica universe",
    "sulaco-eventhorizon-heartofgold": "Three grand spaceships",
    "serenity": "The beloved spaceship Serenity was part of the Firefly televition show",
    "discovery": "The Discovery was part of the Jupitar misson in the Space Odyssey franchise"
}