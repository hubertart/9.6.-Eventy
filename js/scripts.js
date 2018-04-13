var list = document.getElementById("list");
var addElemBtn = document.getElementById("addElem");

function addElem() {

    var allLis = list.getElementsByTagName("li");
    var newLi = document.createElement("li");
    newLi.innerText = "item" + allLis.length;
    list.appendChild(newLi)
}

addElemBtn.addEventListener("click", addElem);
