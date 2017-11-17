$.noConflict();

(function($) {

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();

    $('html').removeClass('nojs').addClass('js');

  }

  //EventListeners
  document.getElementById("doorbell").addEventListener("click", ringDoorbell);
  window.addEventListener("keydown", ringDoorbell);
})(jQuery);
