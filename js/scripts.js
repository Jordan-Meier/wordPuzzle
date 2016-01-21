var countBy1 = function(number, increment) {
  for (var i = 1; i <=number; i += increment) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}


var countBy4 = function(endNumber, increment) {
  var result = [];

  for (var i = increment; i <= endNumber; i += increment) {
    result.push(i);
  }
  if ((isNaN(endNumber)) || (isNaN(increment))) {
    alert("Please fill all fields with a numeric value");
  } else {
  }

  return result;
}





$(document).ready(function() {
  $("form#countUp").submit(function(event) {
    var endNumber = parseFloat($("input#endNum").val());
    var increment = parseFloat($("input#countBy").val());
    var results = countBy4(endNumber, increment);




    $("#result").text(results);

  event.preventDefault();
  });

});
