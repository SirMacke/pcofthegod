var oldPage = document.getElementById('plans');

var pageNumber = 0

function pageViewer(page) {
  oldPage.style.display = 'none';

  var newPage = document.getElementById(page);
  newPage.style.display = 'block';

  oldPage = newPage
}

function newOrFixed(num) {
  var newContainer = document.getElementById('newContainer');
  var fixedContainer = document.getElementById('fixedContainer');

  if (num == 0) {
    fixedContainer.style.display = 'none';
    newContainer.style.display = 'flex';
  } else {
    newContainer.style.display = 'none';
    fixedContainer.style.display = 'flex';
  }
}
