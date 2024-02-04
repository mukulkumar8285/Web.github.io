window.addEventListener("keydown", function(e) {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = createColoredText(e.key, e.keyCode);
});

function createColoredText(key, keyCode) {
  var result = '';

  // Display key characters on one line
  result += '<span class="key-chars">You Pressed: ';
  for (var i = 0; i < key.length; i++) {
    result += `<span style="color: green;">${key[i]}</span>`;
  }
  result += '</span>';

  // Display keyCode on a new line
  result += `<span class="key-code"> <span style="color: green;">${keyCode}</span></span>`;

  return result;
}
