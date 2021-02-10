var isMainSidenavOpen = false;

function openMainTopnav() {
    document.getElementById("mainTopNavOverlay").style.height = "100%";
}

function closeMainTopnav() {
    document.getElementById("mainTopNavOverlay").style.height = "0";
}

function openMainSidenav() {
    if (isMainSidenavOpen) return;

    var mainSidenav = document.getElementById("mainSidenav");
    var siteContainer = document.getElementById("siteContainer");

    mainSidenav.classList.remove("collapsed");
    mainSidenav.classList.add("expanded");

    siteContainer.classList.remove("collapsed");
    siteContainer.classList.add("expanded");

    document.getElementById("toggleMainSidenavBtn").innerHTML = '<i class="fas fa-times"></i>';

    var sideMenuItemLabels = document.getElementsByClassName("sideMenuItemLabel");

    for (var i = 0; i < sideMenuItemLabels.length; i++) {
        sideMenuItemLabels[i].classList.toggle("displayNone");
    }

    isMainSidenavOpen = true;
}

function closeMainSidenav() {
    if (!isMainSidenavOpen) return;

    var mainSidenav = document.getElementById("mainSidenav");
    var siteContainer = document.getElementById("siteContainer");

    mainSidenav.classList.remove("expanded");
    mainSidenav.classList.add("collapsed");

    siteContainer.classList.remove("expanded");
    siteContainer.classList.add("collapsed");

    document.getElementById("toggleMainSidenavBtn").innerHTML = '<i class="fas fa-bars"></i>';

    var sideMenuItemLabels = document.getElementsByClassName("sideMenuItemLabel");

    for (var i = 0; i < sideMenuItemLabels.length; i++) {
        sideMenuItemLabels[i].classList.toggle("displayNone");
    }

    isMainSidenavOpen = false;
}

function toggleMainSidenav() {
    if (isMainSidenavOpen) {
        closeMainSidenav();
    } else {
        openMainSidenav();
    }
}