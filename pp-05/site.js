$.noConflict();

(function($) {

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

  function resetdoorBell() {
    doorbell.currentTime = 0;
    return;
  }

//EventListeners
document.getElementById("doorbell").addEventListener("click", ringDoorbell);
doorbell.addEventListener("ended", resetdoorBell);

})(jQuery);
