const input= document.getElementById("message");
const btn= document.getElementById("submit-btn");
const output= document.getElementById("output-div");
var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}
    
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after sometime");
}

function clickHandler() {
    var inputText = input.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(data => {
        var translatedText = data.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler);
};

btn.addEventListener("click", clickHandler);