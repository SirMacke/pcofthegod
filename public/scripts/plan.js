var pageNumber = 0

function pageSelection(num) {
  var pages = ['top', 'usecase', 'slider1', 'slider2', 'case-size', 'main-color', 'second-color', 'special', 'contact'];

  if (num == +1 && pageNumber < 8) {
    pageNumber++
  }
  else if (num == -1 && pageNumber > 0) {
    pageNumber--
  }

  for (let i = 0; i < pages.length; i++) {
    var page = document.getElementById(pages[i]);
    page.style.display = 'none';
  }

  var newPage = document.getElementById(pages[pageNumber]);
  newPage.style.display = 'block';


  var leftArrow = document.getElementById('left');
  var rightArrow = document.getElementById('right');

  if (pageNumber == 0) {
    leftArrow.style.display = 'none'
  } else {
    leftArrow.style.display = 'block'
  }

  if (pageNumber == 8) {
    rightArrow.style.display = 'none'
  } else {
    rightArrow.style.display = 'block'
  }
}
