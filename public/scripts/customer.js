var firstPage = document.getElementById('status');

function pageViewer(page) {
  firstPage.style.display = 'none';
  firstPage = document.getElementById(page);

  var openPage = document.getElementById(page);
  openPage.style.display = 'block';
}
