$(function() {
  //Submit button clicked --> call makeGrid() function
  const $sizeForm = $('#sizePicker'); // cache jQuery object for submit button
  const $gridTable = $('#pixel_canvas');

  $sizeForm.submit(function makeGrid(e) {
    //get the values from grid height and grid width inputs
    e.preventDefault();
    const yBlocks = $('#input_height').val();
    const xBlocks = $('#input_width').val();

    // create table data elements consisting of xBlocks horizontally and yBlocks vertically
    // note that grid height and width don't have to necessarily be equal
    let gridHTML = '';
    for (let row=1; row<=xBlocks; row++) {
      gridHTML += '<tr>';
      for (let col=1; col<=yBlocks; col++) {
        gridHTML += '<td></td>';
      }
      gridHTML += '</tr>';
    }
    // add those table data elements to the <table> in index.html
    $gridTable.html(gridHTML);
  });

  // when user clicks on a block, change the color of that block
  // I personally like this app better when the event is mouseover
  $gridTable.on('click', 'td', function(e) {
    e.preventDefault();
    // get the value of the color input
    const chosenColor = $('#colorPicker').val();
    $(this).css('background-color', chosenColor);
  });
});
