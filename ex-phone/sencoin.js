window.onload = init;

function init() {
    let btn = document.querySelector("#btn1");

    btn.addEventListener("click",showInfo);
}
function showInfo() {
    let inptxt = document.querySelector("#txt");
    let title = document.querySelector("#Wave");
    let srnCoin = document.querySelector("#Price")
    let tatal = inptxt.value;
    if (tatal == "r0zsya") {
        srnCoin.innerHTML = "5000senCoin"
        title.innerHTML = inptxt.value
    } else if (tatal == "kaneki") {
        srnCoin.innerHTML = "10senCoin"
        title.innerHTML = inptxt.value
    } else if (tatal == "lolo") {
        srnCoin.innerHTML = "2450senCoin"
        title.innerHTML = inptxt.value
    }
     else {
        alert("There is no such name in our system phoneex!")
    }
}