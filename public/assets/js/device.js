// nav-wrapper
// deviceMenu
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
   (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
    // ...
    // Léo
   document.getElementById("nav-wrapper").style = "display: none;"
   document.getElementById("deviceMenu").style = "display: block;"
//  Léo

// 
} else {
    document.getElementById("deviceMenu").style = "display: none"
    document.getElementById("nav-wrapper").style = "display: block;"
}