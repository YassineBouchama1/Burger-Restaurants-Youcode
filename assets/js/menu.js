
filterSelection("all")

function filterSelection(cate) {
    var cards, i;
    cards = document.getElementsByClassName("card-menu-filter");
    console.log(cards)
    if (cate == "all") cate = "";
    for (i = 0; i < cards.length; i++) {
        removeClass(cards[i], "show");
        if (cards[i].className.indexOf(cate) > -1) addClass(cards[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}



var btnContainer = document.getElementById("btnMenusFilter");
var btns = btnContainer.getElementsByClassName("btnFilter");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // loop throught all btns to Remove the active class 
        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }

        // Add the active class to clicked btn
        this.classList.add("active");
    });
}