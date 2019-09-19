var oldPage = document.getElementById('plans');

var pageNumber = 0

function pageViewer(page) {
  oldPage.style.display = 'none';

  var newPage = document.getElementById(page);
  newPage.style.display = 'block';

  oldPage = newPage
}
