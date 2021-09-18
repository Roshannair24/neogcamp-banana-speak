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

  outputDiv.innerText ="fgghh: "+ txtInput.value;



 
});
