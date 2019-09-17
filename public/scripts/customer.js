var firstPage = document.getElementById('status');

var pageNumber = 0


// var user = JSON.parse('{"firstName":"Maximilian","lastName":"Helmersson","country":"Sverige","email":"max.helmersson1@gmail.com","plan":"5d7f8954b64ccc394824491f"}');
//
// console.log('Before');
// console.log(user);
// console.log('After');


function pageViewer(page) {
  firstPage.style.display = 'none';
  firstPage = document.getElementById(page);

  var openPage = document.getElementById(page);

  var leftArrow = document.getElementById('left');
  var rightArrow = document.getElementById('right');

  if (page == 'planAndParts') {
    openPage.style.display = 'flex';

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

function pageSelection(num) {
  // var pages = ['plan', 'parts', 'images'];
  var pages = document.getElementsByClassName('page');

  var leftArrow = document.getElementById('pageLeft');
  var rightArrow = document.getElementById('pageRight');

  leftArrow.disabled = true;
  rightArrow.disabled = true;
  setTimeout(function() {
    leftArrow.disabled = false;
    rightArrow.disabled = false;
  }, 750);

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


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.background = 'none'
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.background = 'dimgrey';
}
