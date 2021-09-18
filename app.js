let btn = document.querySelector(".btn");
let textareayo = document.querySelector("#textarea");
let translator = document.querySelector("[name='translator']");
let textdiv = document.querySelector(".textdiv");

let value = null;
let valuetranslator = null;

btn.addEventListener("click", function () {
  console.log("clicked");

  value = textareayo.value;
  valuetranslator=translator.value;


  console.log("clicked " + value);
  console.log("clicked value translator " + valuetranslator);



  textdiv.style.innerHTML("<h1>hyhy</h1>");

});



