document.getElementById("makeItWork").addEventListener(enableClick);

function enableClick() {

    event.preventDefault();
    //alert("you just turned on the clicking on the other button");
    document.getElementById("clickMe").addEventListener("contextmenu", startClick); //contextmenu for right-click, click for left-click
    document.getElementById("makeItWork").classList.add("enabledButton");
}

function startClick() {
    alert("hi");
}