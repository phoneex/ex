window.onload = init;
alery("d")
function init() {
    let btn = document.querySelector("#btn1");

    btn.addEventListener("click",showInfo);
}
function showInfo() {
    let inptxt = document.querySelector("#txt");
    let title = document.querySelector("#rem2");
    let srnCoin = document.querySelector("#rem")
    let tatal = inptxt.value;
    if (tatal == "سلام") {
        srnCoin.innerHTML = "سلام خوبی"
        title.innerHTML = inptxt.value
    } else if (tatal == "اسمت چیه؟") {
        srnCoin.innerHTML = "&#128516; رهام"
        title.innerHTML = inptxt.value
    } else if (tatal == "رها") {
        srnCoin.innerHTML = "	&#128513; جونم"
        title.innerHTML = inptxt.value
    } else if (tatal == "اسمت چیه") {
        srnCoin.innerHTML = "رها 	&#128515;"
        title.innerHTML = inptxt.value
    } else if (tatal == "دوست دارم") {
        srnCoin.innerHTML = "منم &#128149;"
        title.innerHTML = inptxt.value
    } else if (tatal == "دوست دارم رها") {
        srnCoin.innerHTML = "منم &#128149;"
        title.innerHTML = inptxt.value
    } else if (tatal == "عاشقتم") {
        srnCoin.innerHTML = "منم &#128157;"
        title.innerHTML = inptxt.value
    } else if (tatal == "عاشقتم رها") {
        srnCoin.innerHTML = "منم &#128155;"
        title.innerHTML = inptxt.value
    } else if (tatal == "ناراحتم") {
        srnCoin.innerHTML = "عشقولی نبینم ناراحتی هاا &#129315;"
        title.innerHTML = inptxt.value
    } else if (tatal == "داغونم") {
        srnCoin.innerHTML = "برو بایکی که خیلی دوسش داری حرف بزن خوب میشی &#128579;"
        title.innerHTML = inptxt.value
    } else if (tatal == "اره") {
        srnCoin.innerHTML = "اوک &#129322;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چند سالته") {
        srnCoin.innerHTML = "سینا میدونه &#128517;&#128517;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چند سالته؟") {
        srnCoin.innerHTML = "سینام میدونه &#128524;"
        title.innerHTML = inptxt.value
    } else if (tatal == "خوبی") {
        srnCoin.innerHTML = "مرسی ممنون &#128526;"
        title.innerHTML = inptxt.value
    } else if (tatal == "خوبی؟") {
        srnCoin.innerHTML = "ام مرسی &#128519;"
        title.innerHTML = inptxt.value
    } else if (tatal == "رها تو خوبی") {
        srnCoin.innerHTML = "ام مرسی &#128076;&#128519;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چیکار میکنی") {
        srnCoin.innerHTML = "به تو گوش میدم &#129502;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چیکار میکنی؟") {
        srnCoin.innerHTML = "به تو گوش میدم &#129502;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چطوری") {
        srnCoin.innerHTML = "هیچطوری&#128572;"
        title.innerHTML = inptxt.value
    } else if (tatal == "چطوری؟") {
        srnCoin.innerHTML = "&#129322; هیج طوری"
        title.innerHTML = inptxt.value
    } else if (tatal == "سینا کیه") {
        srnCoin.innerHTML = "سینا خالقمه, اون منو برای تو طراحی کرده&#129322;"
        title.innerHTML = inptxt.value
    } else if (tatal == "سینا کیه؟") {
        srnCoin.innerHTML = "سینا خالقمه, اون منو برای تو طراحی کرده &#128518;"
        title.innerHTML = inptxt.value
    } else if (tatal == "نه") {
        srnCoin.innerHTML = "&#128532;&#128532;&#128532;";
        title.innerHTML = inptxt.value
    } else if (tatal == "بای") {
        srnCoin.innerHTML = "بای گلم";
        title.innerHTML = inptxt.value
    } else if (tatal == "خدافظ") {
        srnCoin.innerHTML = "خدافچ";
        title.innerHTML = inptxt.value
    }     inptxt.value = ""
}