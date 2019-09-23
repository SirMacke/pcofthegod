function updateTotalCost() {
  var computer = parseFloat(document.getElementById('computer').value);
  var service = parseFloat(document.getElementById('service').value);
  var shipping = parseFloat(document.getElementById('shipping').value);
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
