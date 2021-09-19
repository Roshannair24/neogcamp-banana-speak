let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("[name='ntxt-input']");
let outputDiv = document.querySelector("#output");

console.log(btnTranslate);
console.log(txtInput);

console.log("yo");

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function constructTranslateUrl(text) {
  console.log("constructTranslateUrl");

  console.log(serverurl + "?text=" + text);

  return serverurl + "?text=" + text;
}

btnTranslate.addEventListener("click", function () {
  console.log("yo clicked");
  console.log("input " + txtInput.value);

  fetch(constructTranslateUrl(txtInput.value))
    .then((response) => response.json())
    .then((data) => {
      console.log("hhh");

      console.log(data);

      console.log("hhh");

      console.log(data.contents.translated);

      outputDiv.innerText = data.contents.translated;
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
});
