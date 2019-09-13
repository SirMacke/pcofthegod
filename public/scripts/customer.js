var firstPage = document.getElementById('status');

function pageViewer(page) {
  firstPage.style.display = 'none';
  firstPage = document.getElementById(page);

  var openPage = document.getElementById(page);
  openPage.style.display = 'block';
}

var status = 3

function statusCheck() {
  var checks = document.getElementsByClassName('fa-check');

  for (let i = 0; i <= status; i++) {
    checks[i].style.display = 'block'
  }
}

statusCheck()
