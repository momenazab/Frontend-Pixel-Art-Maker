function makeGrid(height, width) {
  var table = document.getElementById("pixel_canvas");
  var grid = '';


for (var i = 0; i < height; i++){
  grid += '<tr class="row' + i + '">';

for (var j = 0; j < width; j++){
    grid += '<td class="cell" id="row' + i + 'cell' + j + '"></td>';
  }
  grid += '</tr>';
}


  table.innerHTML = grid;


  addClickEventToCells();
}


function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('input_height').value;
    var width = document.getElementById('input_width').value;
    makeGrid(height, width);
}


function addClickEventToCells() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; 
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};

makeGrid(10,10);
