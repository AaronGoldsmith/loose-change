var regex = /((?![\D1])\d{3,})/g;
var special = /[^0-9]+/g;

var beginning = function beginning(str) {
  return str.search(regex);
}; // checkNumber returns a callback function with the expected result


function checkNumber(message, cb) {
  var test = beginning(message);

  if (test >= 0) {
    // 'test' contains the starting index of a phone number in 'message'
    // take a new substring from the start index to end of message
    // remove any non digit characters
    phoneNumber = message.substring(test).replace(special, "").substring(0, 10);
    cb(phoneNumber);
  }
} // listens for button `clear` to be clicked


$("#clear").on("click", function () {
  $("#validity").text('');
  $("#text-input").val('');
}); // listens for the enter key to be pressed, then fires off checkNumber()

$("#text-input").keydown(function (e) {
  if (e.key === "Enter") {
    var msg = $("#text-input").val();
    $('#text-input').val('');
    checkNumber(msg, function (num) {
      if (num.length === 10) {
        $("#validity").text(num);
      }
    });
  }
});