let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("[name='ntxt-input']");
let outputDiv = document.querySelector("#output");

outputDiv.innerText = "yo";

console.log(btnTranslate);
console.log(txtInput);

console.log("yo");

btnTranslate.addEventListener("click", function () {
  console.log("yo clicked");
  console.log("input " + txtInput.value);

  outputDiv.innerText = "fgghh: " + txtInput.value;
});

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const text1 = "i-am-ironman-new";
const text2 = "i-am-batman-new";

function counstructurl(text) {


    console.log("constrictor: "+url + "?"+"text=" + text);

  return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + '?'+'text=' + text;
}

function dofetch(text) {
  fetch(counstructurl(text))
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });
}

// dofetch(counstructurl(text1));








