document.getElementById("makeItWork").addEventListener("contextmenu", enableClick);
document.getElementById("makeItWork").addEventListener("click", disableClick);

function enableClick() {

    event.preventDefault();
    //alert("you just turned on the clicking on the other button");
    document.getElementById("clickMe").addEventListener("click", startClick); //contextmenu for right-click, click for left-click
    document.getElementById("makeItWork").classList.add("enabledButton");
}

function disableClick() {

    event.preventDefault();
    //alert("you just turned on the clicking on the other button");
    document.getElementById("clickMe").removeEventListener("click", startClick); //contextmenu for right-click, click for left-click
    document.getElementById("makeItWork").classList.remove("enabledButton");
}



function startClick() {
    alert("hi");
}