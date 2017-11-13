
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
  document.getElementById("doorbell").addEventListener("click", ringDoorbell);
}
