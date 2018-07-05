//Our variables and constants used within the app.
//var drawing is set to false in the begining.
const makeButton = $('.makeButton');
const eyeDroper = $('.eyeDroper');
const canvas = $('#pixel_canvas');
const colorPicker = $('#colorPicker');
const filler = $('.fillerButton');
var drawing = false;//drag while mousedown to draw
var pencil = false;//click to color one cell 
var eraser = false;//erase and return the same canvas size clear

//make button makes a new canvas with the specified width and height
makeButton.click(function() {

    eraser = false;
    makeGrid();
    return false;
});

//fill button fills the whole canvas with picked color
filler.click(function()
{
    let color = colorPicker.val();
    $('td').css('background-color', color);
});


//by dblclick you can clear (return to default canvas color #ffeead ) the cell clicked
canvas.on('dblclick', 'td', function() {
    $(this).css('background-color','#ffeead' );
});


//click a cell to color it
canvas.on('click', 'td', function() {
    let color = colorPicker.val();
    $(this).css('background-color', color);
});


//drwing by draging while mousedown
canvas.on('mousedown','td', function(){
    drawing = true;
    let color = colorPicker.val();
    $(this).css('background-color', color);
});

canvas.on('mouseenter', 'td', function(){
    if (drawing === true){
        let color = colorPicker.val();
        $(this).css('background-color', color);
    }
});

canvas.mouseup(function(){
    drawing = false;
});


function makeGrid() {
    $('tr').remove();
    $('td').remove();

    var height = $('#input_height').val();
    var width = $('#input_width').val();
    for (let x = 1; x <= height; x++) {
        canvas.append('<tr></tr>');
        for (let y = 1; y <= width; y++) {
            canvas.children().last().append('<td></td>');
        }
    }
}


colorPicker.mouseover(function(){
    let colorHex = colorPicker.val();
    $(this).attr('title',colorHex )
});
