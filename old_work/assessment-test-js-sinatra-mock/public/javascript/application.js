$(function() {

// Question 1
  $('#replace').on('click', function (event) {
    var pink = $('#pink');
    pink.empty();
    event.preventDefault();
    text = prompt("Replace some text!");

    var newTxt = $('<p>');
    newTxt.text(text);

    newTxt.appendTo(pink);

  });


});
