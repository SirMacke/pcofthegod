function updateTotalCost() {
  var computer = parseFloat(document.getElementById('computer').value);
  var service = parseFloat(document.getElementById('service').value);
  var shipping = parseFloat(document.getElementById('shipping').value);
  var total = document.getElementById('total');

  total.value = computer + service + shipping;
}
