$.noConflict();

(function($) {

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
  $('html').removeClass('nojs').addClass('js');

  function resetdoorBell() {
    doorbell.currentTime = 0;
    return;
  }

  //EventListeners
  document.getElementById("doorbell").addEventListener("click", ringDoorbell);
  window.addEventListener("keydown", ringDoorbell);
  doorbell.addEventListener("ended", resetdoorBell);
})(jQuery);
