//button click
var btnTranslate = document.querySelector("#btn");

btnTranslate.addEventListener("click", onClick);

//read input
var txtInput = document.querySelector("#txtInput");

//show output
var output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return url + "?text=" + text;
}

function onClick(event) {
  //taking input
  const inputText = txtInput.value;
  //calling server for processing
  fetch(getTranslationUrl(inputText)).then((response) =>
    response
      .json()
      .then((json) => {
        var translatedtxt = json.contents.translated;
        output.innerText = translatedtxt;
      })
      .catch(() => alert("Some Error occured !"))
  );
}
