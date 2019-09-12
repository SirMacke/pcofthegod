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

function secondColor(num) {
  var secondColorSection = document.getElementById('second-color');
  var div = secondColorSection.childNodes[3];
  var options = div.childNodes;

  var icon = document.getElementById('secondColorIcon');
  icon.remove();

  var i = document.createElement("i");
  i.setAttribute('class', 'fas fa-check')
  i.setAttribute('id', 'secondColorIcon');

  var color = options[num * 2 + 1];
  color.appendChild(i)
}

function gameOrBudget(num) {
  var game = document.getElementById('game');
  var budget = document.getElementById('budget');

  if (num == 0) {
    game.style.display = 'none';
    budget.style.display = 'block';
  }
  else {
    game.style.display = 'block';
    budget.style.display = 'none';
  }
}

function sendForms() {
  document.forms[0].submit();

  // Behövs fixas

  setTimeout(function() { document.forms[1].submit(); }, 3000);
}
