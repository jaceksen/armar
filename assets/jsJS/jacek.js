var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("loga").style.visibility = "visible";
    //     document.getElementById("logaPodpis").style.visibility = "visible";
    //   } else 

    if (prevScrollpos < currentScrollPos) {
        document.getElementById("loga").style.visibility = "collapse";
        document.getElementById("logaPodpis").style.visibility = "collapse";
    }
    //   console.log(prevScrollpos);

    if (prevScrollpos < 20) {
        document.getElementById("loga").style.visibility = "visible";
        document.getElementById("logaPodpis").style.visibility = "visible";
    }

    prevScrollpos = currentScrollPos;
}

window.onload = function () {
    document.getElementById("loga").style.visibility = "visible";
    document.getElementById("logaPodpis").style.visibility = "visible";
}