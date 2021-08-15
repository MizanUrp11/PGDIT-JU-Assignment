var sidebarRight = document.querySelector(".sidebar-right");
var menuSection = document.querySelector(".menu");
var wipeAllOut = function () {
    for (let i = 0; i < sidebarRight.childElementCount; i++) {
        var classes = sidebarRight.children[i].className.split(" ");
        if (classes.indexOf("d-none") === -1) {
            sidebarRight.children[i].classList.add("d-none");
            sidebarRight.children[i].classList.remove("d-block");
        }
    }
}

for (let i = 0; i < menuSection.childElementCount; i++) {
    menuSection.children[i].firstChild.addEventListener("click", function () {
        wipeAllOut();
        for (let i = 0; i < sidebarRight.childElementCount; i++) {
            if (sidebarRight.children[i].classList[0] === this.id) {
                sidebarRight.children[i].classList.add("d-block");
                sidebarRight.children[i].classList.remove("d-none");
            }
        }
    })
}