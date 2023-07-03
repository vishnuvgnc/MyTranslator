document.getElementById("translate").addEventListener("click",(function(){
    srcElement = document.getElementById("srcText");
    sourceText = srcElement.textContent;
    if(sourceText == null || sourceText.trim().length == 0) {
        srcElement.className += " error";
    }
}));

 document.getElementById("srcText").addEventListener("click", function(){
    const selection = activeTextarea.value.substring(activeTextarea.selectionStart, activeTextarea.selectionEnd);
    destText = selection;
 })
