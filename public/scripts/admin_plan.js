function updateTotalCost() {
  var computer = parseInt(document.getElementById('computer').value);
  var service = parseInt(document.getElementById('service').value);
  var shipping = parseInt(document.getElementById('shipping').value);
  var total = document.getElementById('total');

  // Fungerar inte..........

  console.log(computer)

  if (computer < 1 && service < 1) {
    total.value = shipping
  } else if (service < 1 && shipping < 1) {
    total.value = computer
  } else if (shipping < 1 && computer < 1) {
    total.value = service
  } else if (computer < 1) {
    total.value = service + shipping;
  } else if (service < 1) {
    total.value = shipping + computer;
  } else if (shipping < 1) {
    total.value = computer + service;
  } else {
    total.value = computer + service + shipping;
  }

  console.log(total.value)
}
