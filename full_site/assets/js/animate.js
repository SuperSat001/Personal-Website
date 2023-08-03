document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["你好世界!", "Bonjour, le monde!", "Hallo, Welt!", "नमस्कार, विश्व!", "「こんにちは世界」!", "Salve, Mundus!", "¡Hola, Mundo!", "హలో, ప్రపంచం!"];

  dataText.sort(() => (Math.random() > .5) ? 1 : -1);
  dataText.unshift("Hello, World!");
  //dataText.push("Hello, World!");

  console.log(dataText);

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("helloworldtext").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 3000);
    }
  }

  function StartTextAnimation(i) {
    // for loop
    i %= dataText.length;
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);
});
