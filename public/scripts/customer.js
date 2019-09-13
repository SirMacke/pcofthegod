var firstPage = document.getElementById('status');

function pageViewer(page) {
  firstPage.style.display = 'none';
  firstPage = document.getElementById(page);

  var openPage = document.getElementById(page);

  var leftArrow = document.getElementById('left');
  var rightArrow = document.getElementById('right');

  if (page == 'planAndParts') {
    openPage.style.display = 'flex';

    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  } else {
    openPage.style.display = 'block';

    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
}

var status = 3

function statusCheck() {
  var checks = document.getElementsByClassName('fa-check');

  for (let i = 0; i <= status; i++) {
    checks[i].style.display = 'block'
  }
}

statusCheck()

var pageNumber = 0

function pageSelection(num) {
  // var pages = ['plan', 'parts', 'images'];
  var pages = document.getElementsByClassName('page');

  if (num == +1) {
    if (pageNumber == 0) {
      var id = setInterval(frame, 10);

      var planWidth = 100
      var partsPos = 100
      var imagesPos = 150


      function frame() {
        if (planWidth == 50 && partsPos == 50 && imagesPos == 100) {
          clearInterval(id);
        } else {
          planWidth--;
          partsPos--;
          imagesPos--;
          pages[0].style.width = planWidth + '%';
          pages[1].style.left = partsPos + '%';
          pages[2].style.left = imagesPos + '%';
        }
      }
    } else {
      var id = setInterval(frame, 15);

      var planPos = 0
      var partsPos = 50
      var imagesPos = 100

      function frame() {
        if (planPos == -50 && partsPos == 0 && imagesPos == 50) {
          clearInterval(id);
        } else {
          planPos--;
          partsPos--;
          imagesPos--;
          pages[0].style.left = planPos + '%';
          pages[1].style.left = partsPos + '%';
          pages[2].style.left = imagesPos + '%';
        }
      }
    }

    pageNumber++;
  }
  else if (num == -1) {
    if (pageNumber == 1) {
      var id = setInterval(frame, 10);

      var planWidth = 50
      var partsPos = 50
      var imagesPos = 100


      function frame() {
        if (planWidth == 100 && partsPos == 100 && imagesPos == 150) {
          clearInterval(id);
        } else {
          planWidth++;
          partsPos++;
          imagesPos++;
          pages[0].style.width = planWidth + '%';
          pages[1].style.left = partsPos + '%';
          pages[2].style.left = imagesPos + '%';
        }
      }
    } else {
      var id = setInterval(frame, 15);

      var planPos = -50
      var partsPos = 0
      var imagesPos = 50

      function frame() {
        if (planPos == 0 && partsPos == 50 && imagesPos == 100) {
          clearInterval(id);
        } else {
          planPos++;
          partsPos++;
          imagesPos++;
          pages[0].style.left = planPos + '%';
          pages[1].style.left = partsPos + '%';
          pages[2].style.left = imagesPos + '%';
        }
      }
    }

    pageNumber--;
  }

  var leftArrow = document.getElementById('left');
  var rightArrow = document.getElementById('right');

  if (pageNumber == 0) {
    leftArrow.style.display = 'none'
  } else {
    leftArrow.style.display = 'block'
  }

  if (pageNumber == 2) {
    rightArrow.style.display = 'none'
  } else {
    rightArrow.style.display = 'block'
  }
}
