function newImg(files, num) {
  // const parts = ['case', 'mb', 'cpu', 'cooler', 'ram', 'gpu', 'hdd', 'ssd', 'psu', 'cables', 'fans', 'leds', 'os', 'extra'];
  // console.log(`#text-${parts[num]}`)
  // var part = document.querySelector(`#text-${parts[num]}`);
  // console.log(part[0].files)
  // part.textContent = part.files[0].name;

  const parts = ['case', 'mb', 'cpu', 'cooler', 'ram', 'gpu', 'hdd', 'ssd', 'psu', 'cables', 'fans', 'leds', 'os', 'extra'];
  var part = document.querySelector(`#text-${parts[num]}`);
  part.textContent = files[0].name;
}


function updateTotalCost() {
  var computer = parseFloat(document.getElementById('computer').value);
  var service = parseFloat(document.getElementById('service').value);
  var shipping = parseFloat(document.getElementById('shipping').value);
  var total = document.getElementById('total');

  total.value = computer + service + shipping;
}
