var divItems = document.getElementsByClassName("feature-box");

function selected(item) {
  var backgroundColor = window.getComputedStyle(item).backgroundColor;
  
  if (backgroundColor === 'rgb(217, 188, 214)' || backgroundColor === '#D9BCD6') {
    item.style.backgroundColor = 'white';
  } else {
    item.style.backgroundColor = '#D9BCD6';
  }
}

