function closeWindow() {
    let windows = document.getElementsByClassName("window");
    for (let i = 0; i < windows.length; i++) {
        windows[i].style.visibility = "hidden";
    }
}

function showWindow(name) {
    document.getElementById(name).style.visibility = "visible";
}